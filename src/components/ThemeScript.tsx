import Script from "next/script";

/**
 * 初回表示前に ?theme= または localStorage('theme') を読み、
 * <html data-theme="..."> を設定します（FOUT防止）。
 * 例: /?theme=modern, /?theme=bold
 */
export default function ThemeScript() {
    const code = `(function(){try{
    var p=new URLSearchParams(location.search);
    var t=p.get('theme')||localStorage.getItem('theme')||'classic';
    document.documentElement.setAttribute('data-theme', t);
  }catch(e){}})();`;
    return (
        <Script id="theme-init" strategy="beforeInteractive">
            {code}
        </Script>
    );
}
