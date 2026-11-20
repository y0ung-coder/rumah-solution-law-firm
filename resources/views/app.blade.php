<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Rumah Solution Law Firm') }} | Adv. Samuel Tambunan, S.Kom., S.H.</title>
    <meta name="description" content="Rumah Solution Law Firm (SLF) - Professional legal representation and strategic solutions led by Adv. Samuel Tambunan, S.Kom., S.H. Your Legal Matter, Our Priority.">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="font-sans antialiased text-[#25292D] bg-[#F8F8F5] selection:bg-[#B89B69] selection:text-white overflow-x-hidden">
    @inertia
</body>
</html>
