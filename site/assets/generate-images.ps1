Add-Type -AssemblyName System.Drawing
$images = @(
    @{ Path = 'd:/Programming/portfolio/site/assets/images/code-finder.jpg'; Text = 'Code Finder'; Bg = [System.Drawing.Color]::FromArgb(31,41,55); Accent = [System.Drawing.Color]::FromArgb(99,102,241) }
    @{ Path = 'd:/Programming/portfolio/site/assets/images/ai-accelerator.jpg'; Text = 'AI Accelerator'; Bg = [System.Drawing.Color]::FromArgb(24,33,76); Accent = [System.Drawing.Color]::FromArgb(244,114,182) }
    @{ Path = 'd:/Programming/portfolio/site/assets/images/github.jpg'; Text = 'GitHub'; Bg = [System.Drawing.Color]::FromArgb(15,23,42); Accent = [System.Drawing.Color]::FromArgb(255,255,255) }
)
foreach ($img in $images) {
    $bitmap = New-Object System.Drawing.Bitmap 1000,620
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    $g.SmoothingMode = 'HighQuality'
    $g.Clear($img.Bg)

    $overlayBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(80, $img.Accent))
    $g.FillEllipse($overlayBrush, -120, -80, 520, 420)
    $g.FillEllipse($overlayBrush, 620, 320, 420, 420)
    $overlayBrush.Dispose()

    $font = New-Object System.Drawing.Font('Segoe UI', 68, [System.Drawing.FontStyle]::Bold)
    $accentBrush = New-Object System.Drawing.SolidBrush($img.Accent)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = 'Center'
    $format.LineAlignment = 'Center'
    $rectangle = New-Object System.Drawing.RectangleF(0, 0, 1000, 620)

    $g.DrawString($img.Text, $font, $accentBrush, $rectangle, $format)

    $accentBrush.Dispose()
    $font.Dispose()
    $format.Dispose()
    $g.Dispose()

    $bitmap.Save($img.Path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bitmap.Dispose()
}
