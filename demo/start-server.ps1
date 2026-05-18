$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://+:8000/')
$listener.Start()
Write-Host "服务器已启动！访问地址: http://localhost:8000"
Write-Host "按 Ctrl+C 停止服务器"
try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $response = $context.Response
        $path = $context.Request.Url.AbsolutePath
        if ($path -eq "/") { $path = "/index.html" }
        $filePath = Join-Path $PWD $path.Substring(1)
        if (Test-Path $filePath) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
