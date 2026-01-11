<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Finance Wallet</title>

<link rel="manifest" href="manifest.json">

<meta name="theme-color" content="#2563eb">
</head>

<body style="font-family:system-ui;text-align:center;padding-top:40px">

<h1>Finance Wallet</h1>
<p>Jika ini muncul, index.html sudah BENAR ✅</p>

<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('SW OK'))
    .catch(e => console.error('SW ERROR', e));
}
</script>

</body>
</html>
