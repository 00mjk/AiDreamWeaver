import { useState } from 'react'
export default function Home() {

    const [openLogin, setOpenLogin] = useState(false)

    return <div id="__next">
        <div className="fixed top-14 w-full flex justify-center z-10 left-[50%] -translate-x-1/2">
            <div className="transition-transform will-change-transform ease-out -translate-y-28" />
            <div className="transition-transform will-change-transform ease-out -translate-y-28" />
            <div className="transition-transform will-change-transform ease-out -translate-y-28" />
            <div className="transition-transform will-change-transform ease-out -translate-y-28" />
            <div className="transition-transform will-change-transform ease-out -translate-y-28" />
        </div>
        <div>
            <nav className="Header_header__Kpax6" style={{ zIndex: 40 }}>
                <div className="chakra-stack css-84zodg" style={{ height: '40px' }}>
                    <div className="Header_header__logo__Gat_c">
                        <button aria-label="Go Back" className="md:hidden hidden">
                            <svg
                                width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#E6E6E7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#E6E6E7" strokeWidth={2} strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </button>
                        <a href="/">
                            <span className>
                                <img className="Header_header__logo_desktop__Y2IAX"
                                    src="/logo-light.svg" alt="Playground logo" width="157px" height="32px" />
                                <img
                                    className="Header_header__logo_mobile__HjbTR" src="/logo.svg" alt="Playground logo" width="32px"
                                    height="32px" />
                            </span>
                        </a>
                    </div>
                    <div className="chakra-input__group Header_header__search__5ra3h css-4302v8">
                        <div className="chakra-input__left-element css-1cw84h2" style={{ height: '36px' }}>
                            <svg viewBox="0 0 24 24"
                                focusable="false" className="chakra-icon css-1985djr">
                                <path fill="currentColor"
                                    d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z" />
                            </svg>
                        </div>
                        <input autoComplete="off" type="search" placeholder="Search" id="search"
                            className="chakra-input css-nxezkn" defaultValue="ice" />
                        <div className="chakra-input__right-element css-11pdqhs" style={{ height: '36px' }}>
                            <svg width={22} height={22}
                                viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3462 5.91113H11.4492L9 15.9336H9.89697L12.3462 5.91113Z" fill="#828086" />
                                <rect x="0.5" y="0.5" width={21} height={21} rx="3.5" stroke="#2A2832" />
                            </svg>
                        </div>
                    </div>
                </div>
                <header className="flex-none  Header_header__auth__O1270">
                    <div className="Header_header__auth_true__eBAi7">
                        <div className="relative">
                            <button data-cy="open-profile-dropdown" style={{ paddingTop: '2px' }}
                                onClick={() => setOpenLogin(!openLogin)}>
                                <div className="Header_header__placeholder_avatar__uqZzs" style={{ width: '36px', height: '36px' }}

                                ><svg
                                    xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none" viewBox="0 0 36 36">
                                        <rect width={36} height={36} fill="#2A2832" rx={6} />
                                        <path stroke="#828086" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                            d="M24.333 25.125v-1.583a3.167 3.167 0 00-3.166-3.167h-6.334a3.167 3.167 0 00-3.167 3.167v1.583M18 17.208a3.167 3.167 0 100-6.333 3.167 3.167 0 000 6.333z" />
                                    </svg></div>
                            </button>
                            <div
                                className={`absolute p-1 right-0 w-48 bg-gray-900 rounded-lg origin-top-right transition-all border border-white/10 ${openLogin ? "" : "scale-95 opacity-0 pointer-events-none"}`}>
                                <a className="profile-item" href="/privacy"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={16}
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>Privacy Policy</a><button className="profile-item"><svg data-testid="geist-icon" fill="none"
                                    height={16} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                                    <circle cx={12} cy={12} r={2} />
                                    <path
                                        d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" />
                                </svg>Request Help</button><a className="profile-item" href="/terms"><svg
                                    xmlns="http://www.w3.org/2000/svg" width={24} height={16} viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1={16} y1={13} x2={8} y2={13} />
                                    <line x1={16} y1={17} x2={8} y2={17} />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>Terms of Service</a><a className="profile-item"
                                    href="https://dapper-glove-b11.notion.site/Working-at-Playground-AI-e90f8b72558748dcb77dcf4384410d7a"><svg
                                        fill="none" height={16} shapeRendering="geometricPrecision" stroke="currentColor"
                                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                                        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                                    </svg>Jobs</a><a className="profile-item" href="/pricing"><span><svg stroke="currentColor"
                                        fill="currentColor" strokeWidth="1.5" viewBox="0 0 1024 1024" fontSize={18} height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M899.6 276.5L705 396.4 518.4 147.5a8.06 8.06 0 0 0-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.8-6.7-6.5-11.4-12.3-7.9zm-126 534.1H250.3l-53.8-409.4 139.8 86.1L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4zM512 509c-62.1 0-112.6 50.5-112.6 112.6S449.9 734.2 512 734.2s112.6-50.5 112.6-112.6S574.1 509 512 509zm0 160.9c-26.6 0-48.2-21.6-48.2-48.3 0-26.6 21.6-48.3 48.2-48.3s48.2 21.6 48.2 48.3c0 26.6-21.6 48.3-48.2 48.3z" />
                                    </svg></span>Pricing</a><button className="profile-item"><svg xmlns="http://www.w3.org/2000/svg"
                                        width={24} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                        <polyline points="10 17 15 12 10 7" />
                                        <line x1={15} y1={12} x2={3} y2={12} />
                                    </svg>Log in</button></div>
                        </div>
                        <div>
                            <div style={{ display: 'flex' }}><button className="Header_header__auth_highlight__2XYsU"
                                style={{ width: '115px' }}><span className="sr-only">Get Started</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width={115} height={36} fill="none" viewBox="0 0 115 36">
                                    <rect width={115} height={36} fill="url(#paint0_linear_3143_314939)" rx={6} />
                                    <rect width={115} height={36} fill="url(#paint1_linear_3143_314939)" rx={6}
                                        style={{ mixBlendMode: 'screen' }} />
                                    <rect width={115} height={36} fill="#AAB9EE" fillOpacity="0.5" rx={6} />
                                    <rect width={115} height={36} fill="#fff" fillOpacity="0.4" rx={6} />
                                    <path fill="#000"
                                        d="M21.49 23.253c.897 0 1.672-.173 2.324-.52a3.647 3.647 0 001.517-1.476c.355-.638.533-1.392.533-2.263v-1.25h-4.142v1.503h2.133l-.007.185a2.126 2.126 0 01-.315 1.087c-.196.31-.467.551-.813.724-.347.173-.745.26-1.197.26-.542 0-1.011-.14-1.408-.417-.396-.283-.704-.681-.923-1.196-.218-.52-.328-1.135-.328-1.846v-.014c0-.697.105-1.299.315-1.804.21-.51.506-.903.888-1.176.388-.278.846-.417 1.374-.417.58 0 1.07.137 1.47.41.401.273.67.656.807 1.148l.013.069h2.051l-.013-.069a3.572 3.572 0 00-.732-1.73 3.912 3.912 0 00-1.504-1.161c-.615-.278-1.312-.417-2.092-.417-.952 0-1.78.212-2.481.636-.702.419-1.244 1.016-1.627 1.79-.383.77-.574 1.685-.574 2.742v.014c0 1.07.191 1.993.574 2.768.383.775.927 1.372 1.634 1.791.706.42 1.547.629 2.522.629zm9.607-.096c.551 0 1.028-.068 1.429-.205a3.23 3.23 0 001.011-.547c.274-.223.488-.462.643-.718.155-.26.262-.508.321-.745l.014-.068h-1.86l-.02.041a1.142 1.142 0 01-.26.321 1.682 1.682 0 01-.492.301c-.205.087-.453.13-.745.13-.36 0-.67-.08-.93-.24-.26-.159-.46-.389-.601-.69-.142-.3-.212-.663-.212-1.087v-.806c0-.438.07-.807.212-1.108.146-.305.342-.535.588-.69.25-.16.535-.24.854-.24.324 0 .606.078.848.233.246.15.437.376.574.677.141.3.212.677.212 1.128v.8l.937-1.183h-5.203v1.25h6.16v-.621c0-.761-.144-1.424-.431-1.99a3.158 3.158 0 00-1.23-1.319c-.534-.314-1.167-.471-1.901-.471-.73 0-1.365.161-1.907.485-.538.324-.955.78-1.251 1.367-.292.588-.438 1.28-.438 2.078v.007c0 .807.148 1.502.445 2.085a3.214 3.214 0 001.264 1.354c.552.314 1.208.471 1.969.471zm8.377-.13a5.835 5.835 0 00.998-.089v-1.483l-.273.027a5.819 5.819 0 01-.314.007c-.338 0-.584-.077-.739-.232-.15-.16-.225-.408-.225-.745v-3.535h1.551v-1.503h-1.551v-1.798h-2.017v1.798h-1.162v1.503h1.162v3.993c0 .729.2 1.255.602 1.579.4.319 1.057.478 1.968.478zm10.275.226c.82 0 1.526-.13 2.119-.39.597-.264 1.055-.633 1.374-1.107.323-.479.485-1.044.485-1.695v-.007c0-.77-.24-1.377-.718-1.819-.474-.442-1.233-.77-2.276-.984l-1.046-.212c-.579-.118-.998-.278-1.258-.479a.965.965 0 01-.383-.786v-.006c0-.247.071-.458.212-.636a1.36 1.36 0 01.595-.424c.255-.1.551-.15.889-.15.346 0 .65.052.909.157.264.1.474.24.629.417.16.178.26.385.3.622l.014.082h1.942l-.007-.089a2.812 2.812 0 00-.527-1.47c-.31-.433-.74-.772-1.292-1.018-.547-.25-1.203-.376-1.968-.376-.73 0-1.377.127-1.942.383-.565.25-1.01.604-1.333 1.06-.323.455-.485.988-.485 1.599v.007c0 .747.232 1.36.697 1.838.465.479 1.21.823 2.235 1.033l1.04.212c.615.127 1.052.289 1.312.485a.923.923 0 01.397.78v.006c0 .25-.08.474-.24.67a1.536 1.536 0 01-.65.451 2.64 2.64 0 01-.97.164c-.383 0-.722-.052-1.018-.157a1.823 1.823 0 01-.711-.43 1.115 1.115 0 01-.301-.65l-.007-.068h-1.99l.008.109c.04.583.225 1.091.553 1.524.333.429.789.761 1.367.998.58.237 1.26.356 2.044.356zm8.999-.226a5.832 5.832 0 00.998-.089v-1.483l-.274.027a5.826 5.826 0 01-.314.007c-.337 0-.583-.077-.738-.232-.15-.16-.226-.408-.226-.745v-3.535h1.552v-1.503h-1.552v-1.798h-2.017v1.798h-1.162v1.503h1.163v3.993c0 .729.2 1.255.601 1.579.401.319 1.057.478 1.969.478zm4.85.09c.328 0 .631-.044.909-.13.282-.092.529-.22.738-.383a1.96 1.96 0 00.513-.602h.123V23h1.969v-5.14c0-.534-.123-.99-.37-1.368-.24-.383-.594-.674-1.059-.875-.465-.205-1.03-.307-1.695-.307-.63 0-1.183.09-1.661.273-.474.182-.853.437-1.135.766a2.157 2.157 0 00-.5 1.155l-.006.061h1.846l.013-.027a.903.903 0 01.451-.513c.228-.123.522-.184.882-.184.41 0 .723.089.937.266.219.174.328.424.328.752v2.4c0 .264-.07.503-.212.718-.141.21-.333.375-.574.499a1.798 1.798 0 01-.827.184c-.347 0-.63-.082-.848-.246a.8.8 0 01-.328-.677v-.013c0-.274.105-.49.314-.65.21-.16.53-.25.957-.273l2.502-.164V18.42l-2.802.17c-.935.055-1.655.276-2.16.664-.506.383-.76.914-.76 1.593v.013c0 .456.105.855.315 1.197.21.337.5.599.868.786.374.182.798.273 1.272.273zM69.945 23h1.996v-4.21c0-.356.075-.662.225-.917.15-.255.365-.451.643-.588.278-.141.606-.212.984-.212.155 0 .308.012.458.034.155.019.308.046.459.082v-1.743c-.1-.027-.217-.05-.35-.068a2.806 2.806 0 00-.396-.027c-.487 0-.895.113-1.223.341-.328.224-.554.54-.677.95h-.123v-1.168h-1.996V23zm9.526.027a5.825 5.825 0 00.998-.089v-1.483l-.274.027a5.823 5.823 0 01-.314.007c-.338 0-.584-.077-.739-.232-.15-.16-.225-.408-.225-.745v-3.535h1.552v-1.503h-1.552v-1.798H76.9v1.798h-1.162v1.503H76.9v3.993c0 .729.2 1.255.602 1.579.4.319 1.057.478 1.969.478zm6.053.13c.551 0 1.027-.068 1.428-.205a3.23 3.23 0 001.012-.547c.273-.223.488-.462.643-.718.155-.26.262-.508.321-.745l.014-.068h-1.86l-.02.041a1.143 1.143 0 01-.26.321 1.68 1.68 0 01-.492.301c-.205.087-.454.13-.745.13-.36 0-.67-.08-.93-.24-.26-.159-.46-.389-.602-.69-.14-.3-.212-.663-.212-1.087v-.806c0-.438.071-.807.212-1.108.146-.305.342-.535.588-.69.251-.16.536-.24.855-.24.323 0 .606.078.847.233.247.15.438.376.575.677.141.3.212.677.212 1.128v.8l.936-1.183h-5.202v1.25h6.16v-.621c0-.761-.144-1.424-.431-1.99a3.158 3.158 0 00-1.231-1.319c-.533-.314-1.167-.471-1.9-.471-.73 0-1.365.161-1.908.485-.537.324-.954.78-1.25 1.367-.292.588-.438 1.28-.438 2.078v.007c0 .807.148 1.502.444 2.085a3.213 3.213 0 001.265 1.354c.551.314 1.208.471 1.969.471zm7.94-.04c.533 0 .993-.112 1.38-.336.388-.228.677-.544.869-.95h.123V23h1.996V12.596h-1.996v4.08h-.123a2.135 2.135 0 00-.882-.97 2.613 2.613 0 00-1.368-.355c-.637 0-1.184.154-1.64.464-.456.31-.807.755-1.053 1.333-.241.58-.362 1.272-.362 2.079v.013c0 .802.123 1.493.369 2.072.25.578.604 1.025 1.06 1.34.46.31 1.002.464 1.626.464zm.676-1.655a1.55 1.55 0 01-.909-.267 1.68 1.68 0 01-.588-.765c-.137-.333-.205-.73-.205-1.19v-.013c0-.46.068-.855.205-1.183.137-.333.333-.588.588-.766.26-.182.563-.273.91-.273.35 0 .653.091.908.273.26.178.458.433.595.766.141.328.212.725.212 1.19v.013c0 .456-.07.85-.212 1.183a1.681 1.681 0 01-.588.765c-.255.178-.56.267-.916.267z" />
                                    <defs>
                                        <linearGradient id="paint0_linear_3143_314939" x1="-56.991" x2="114.163" y1="0.923" y2="93.479"
                                            gradientUnits="userSpaceOnUse">
                                            <stop offset="0.125" stopColor="#C5FF7C" />
                                            <stop offset="0.318" stopColor="#FEB0FE" stopOpacity="0.75" />
                                            <stop offset="0.557" stopColor="#8571FF" stopOpacity="0.5" />
                                            <stop offset="0.766" stopColor="#4EEBC6" stopOpacity="0.75" />
                                            <stop offset="0.919" stopColor="#7CB0FF" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_3143_314939" x1="57.5" x2="57.5" y1="-14.25" y2="118.875"
                                            gradientUnits="userSpaceOnUse">
                                            <stop offset="0.141" />
                                            <stop offset="0.161" />
                                            <stop offset="0.244" stopColor="#fff" />
                                            <stop offset="0.385" />
                                            <stop offset="0.546" stopColor="#fff" />
                                            <stop offset="0.676" />
                                            <stop offset="0.801" stopColor="#fff" />
                                            <stop offset="0.929" />
                                            <stop offset="0.986" stopColor="#fff" />
                                        </linearGradient>
                                    </defs>
                                </svg></button></div>
                        </div>
                    </div>
                </header>
            </nav>
            <div className="Layout_layout__main__2GVyJ undefined">
                <div className="chakra-stack css-84zodg">
                    <div className="px-4 pt-2 css-gmuwbf" style={{ color: 'gray', fontSize: '16px', minHeight: '50px' }}>
                        <h2>Showing results for <span style={{ color: 'white' }}>"ice"</span></h2>
                    </div>
                    <div className="css-17xejub" />
                </div>
                <div className="undefined px-4 pt-2">
                    <div className="infinite-scroll-component__outerdiv">
                        <div className="infinite-scroll-component " style={{ height: 'auto', overflow: 'visible' }}>
                            <div>
                                <div style={{
                                    display: 'flex', flexDirection: 'row', placeContent: 'stretch center',
                                    boxSizing: 'border-box', width: '100%', gap: '16px'
                                }}>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start',
                                        flex: '1 1 0%', width: '0px', gap: '16px'
                                    }}>
                                        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))' }}>
                                            <div id="image-cl9og8jge0azms601b035hrs4"
                                                className="flex flex-col items-center rounded-lg select-none"><a
                                                    className="Image_image__0SSoU transition-all image-card-grid "
                                                    href="/post/cl9og8jge0azms601b035hrs4" style={{ transitionDelay: '0.130255s' }}><img
                                                        src="https://storage.googleapis.com/pai-images/3feaa2c9f3e942f0814533dc62cd17b1.jpeg"
                                                        alt="Prompt: cute isometric ice cube, soft smooth lighting, pastel colors, soft colors, 100mm, 3d blender render, hypersonic, 8k, stunning quality, octane render, trending on artstation, sharp focus, studio photo, intricate details, highly detailed, by greg rutkowski, hypersonic, 8k, stunning quality, octane render, trending on artstation, sharp focus, studio photo, intricate details, highly detailed, by greg rutkowski"
                                                        style={{ aspectRatio: '1 / 1', objectFit: 'fill' }} />
                                                    <div className="flex justify-end sm:hidden w-full absolute z-10 right-2 top-2"><span
                                                        className="bg-black/60 rounded-md backdrop-blur-md">
                                                        <div
                                                            className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                            aria-label="Toggle like">
                                                            <div className="relative ">
                                                                <div
                                                                    className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                    <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                        height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                            width: '100%',
                                                                            height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                            contentVisibility: 'visible'
                                                                        }}>
                                                                        <defs>
                                                                            <clipPath id="__lottie_element_2235">
                                                                                <rect width={1080} height={1080} x={0} y={0} />
                                                                            </clipPath>
                                                                        </defs>
                                                                        <g clipPath="url(#__lottie_element_2235)">
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                opacity={1} style={{ display: 'block' }}>
                                                                                <g opacity={1}
                                                                                    transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                    <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                        d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                    viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="overflow-visible">
                                                                    <path
                                                                        d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                        stroke="currentColor" strokeWidth={20} />
                                                                </svg></span>
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                    <div className="Image_image__overlay__q5mly max-h-full"><a
                                                        className="Image_image__0SSoU transition-all image-card-grid "
                                                        href="/post/cl9og8jge0azms601b035hrs4" style={{ transitionDelay: '0.130255s' }} />
                                                        <div className="justify-between items-center flex mt-1 pl-1"><a
                                                            className="Image_image__0SSoU transition-all image-card-grid "
                                                            href="/post/cl9og8jge0azms601b035hrs4" style={{ transitionDelay: '0.130255s' }}><span
                                                                className="truncate" /></a><a href="/profile/cl9kiu1h91cczs60143ki9uh3"
                                                                    className="author-avatar truncate flex items-center whitespace-normal text-[14px] text-white font-bold gap-2 pointer-events-auto"><img
                                                                    src="https://lh3.googleusercontent.com/a/ALm5wu2MkTUV_GnOf7GuybUOGRUU86vAMKnqBU7XJnyH=s96-c"
                                                                    alt="Kevin Hu avatar" width="25px" height="25px" className="rounded flex-none"
                                                                    referrerPolicy="no-referrer" /><span className="truncate">Kevin Hu</span></a>
                                                            <div className="flex items-center gap-x-2 right-0">
                                                                <div
                                                                    className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                                    aria-label="Toggle like">
                                                                    <div className="relative ">
                                                                        <div
                                                                            className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                            <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                                height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                                    width: '100%',
                                                                                    height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                                    contentVisibility: 'visible'
                                                                                }}>
                                                                                <defs>
                                                                                    <clipPath id="__lottie_element_2">
                                                                                        <rect width={1080} height={1080} x={0} y={0} />
                                                                                    </clipPath>
                                                                                </defs>
                                                                                <g clipPath="url(#__lottie_element_2)">
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                        opacity={1} style={{ display: 'block' }}>
                                                                                        <g opacity={1}
                                                                                            transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                            <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                                d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                        </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                            viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                            className="overflow-visible">
                                                                            <path
                                                                                d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                                stroke="currentColor" strokeWidth={20} />
                                                                        </svg></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="Image_image__overlay_description__KBarZ ">
                                                            <div className="flex justify-between items-end">
                                                                <div className="flex-grow pl-2 overflow-hidden">
                                                                    <h4 className="text-white text-left font-bold ">Cute isometric ice cube</h4>
                                                                    <p className="w-full text-white line-clamp-4">cute isometric ice cube, soft smooth
                                                                        lighting, pastel colors, soft colors, 100mm, 3d blender render, hypersonic, 8k, stunning
                                                                        quality, octane render, trending on artstation, sharp focus, studio photo, intricate
                                                                        details, highly detailed, by greg rutkowski, hypersonic, 8k, stunning quality, octane
                                                                        render, trending on artstation, sharp focus, studio photo, intricate details, highly
                                                                        detailed, by greg rutkowski</p>
                                                                </div>
                                                                <div className="w-8 flex-none">
                                                                    <div className="absolute bottom-3 right-3 flex items-center"><span className /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start',
                                        flex: '1 1 0%', width: '0px', gap: '16px'
                                    }}>
                                        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))' }}>
                                            <div id="image-clabgf1l93f26s601nu3avo50"
                                                className="flex flex-col items-center rounded-lg select-none"><a
                                                    className="Image_image__0SSoU transition-all image-card-grid "
                                                    href="/post/clabgf1l93f26s601nu3avo50" style={{ transitionDelay: '0.182379s' }}><img
                                                        src="https://storage.googleapis.com/pai-images/832155f5aaae4531814f8e5bffe2020e.jpeg"
                                                        alt="Prompt: 2d wallpaper, stylized cartoon ice, texture, substance designer, artstation, HD, tile, detailed, seamless texture, tileable texture, repetitive, consistent, blue, trending on artstation, sharp focus, studio photo, intricate details, highly detailed, by greg rutkowski"
                                                        style={{ aspectRatio: '1.5 / 1', objectFit: 'fill' }} />
                                                    <div className="flex justify-end sm:hidden w-full absolute z-10 right-2 top-2"><span
                                                        className="bg-black/60 rounded-md backdrop-blur-md">
                                                        <div
                                                            className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                            aria-label="Toggle like">
                                                            <div className="relative ">
                                                                <div
                                                                    className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                    <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                        height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                            width: '100%',
                                                                            height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                            contentVisibility: 'visible'
                                                                        }}>
                                                                        <defs>
                                                                            <clipPath id="__lottie_element_3018">
                                                                                <rect width={1080} height={1080} x={0} y={0} />
                                                                            </clipPath>
                                                                        </defs>
                                                                        <g clipPath="url(#__lottie_element_3018)">
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                opacity={1} style={{ display: 'block' }}>
                                                                                <g opacity={1}
                                                                                    transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                    <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                        d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                    viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="overflow-visible">
                                                                    <path
                                                                        d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                        stroke="currentColor" strokeWidth={20} />
                                                                </svg></span>
                                                            </div>
                                                        </div>
                                                    </span></div><div className="Image_image__overlay__q5mly max-h-full"><a
                                                        className="Image_image__0SSoU transition-all image-card-grid "
                                                        href="/post/clabgf1l93f26s601nu3avo50" style={{ transitionDelay: '0.182379s' }} />
                                                        <div className="justify-between items-center flex mt-1 pl-1"><a
                                                            className="Image_image__0SSoU transition-all image-card-grid "
                                                            href="/post/clabgf1l93f26s601nu3avo50" style={{ transitionDelay: '0.182379s' }}><span
                                                                className="truncate" /></a><a href="/profile/clabc1cjx2tovs60190rg6hhu"
                                                                    className="author-avatar truncate flex items-center whitespace-normal text-[14px] text-white font-bold gap-2 pointer-events-auto"><img
                                                                    src="https://lh3.googleusercontent.com/a/ALm5wu0J5noMhOWEZqhOoANTJSct3zm4Kh6UJzrG5thp8Q=s96-c"
                                                                    alt="Fulu avatar" width="25px" height="25px" className="rounded flex-none"
                                                                    referrerPolicy="no-referrer" /><span className="truncate">Fulu</span></a>
                                                            <div className="flex items-center gap-x-2 right-0">
                                                                <div
                                                                    className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                                    aria-label="Toggle like">
                                                                    <div className="relative ">
                                                                        <div
                                                                            className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                            <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                                height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                                    width: '100%',
                                                                                    height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                                    contentVisibility: 'visible'
                                                                                }}>
                                                                                <defs>
                                                                                    <clipPath id="__lottie_element_1162">
                                                                                        <rect width={1080} height={1080} x={0} y={0} />
                                                                                    </clipPath>
                                                                                </defs>
                                                                                <g clipPath="url(#__lottie_element_1162)">
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                        opacity={1} style={{ display: 'block' }}>
                                                                                        <g opacity={1}
                                                                                            transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                            <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                                d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                        </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                            viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                            className="overflow-visible">
                                                                            <path
                                                                                d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                                stroke="currentColor" strokeWidth={20} />
                                                                        </svg></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="Image_image__overlay_description__KBarZ ">
                                                            <div className="flex justify-between items-end">
                                                                <div className="flex-grow pl-2 overflow-hidden">
                                                                    <h4 className="text-white text-left font-bold ">2d wallpaper</h4>
                                                                    <p className="w-full text-white line-clamp-4">2d wallpaper, stylized cartoon ice, texture,
                                                                        substance designer, artstation, HD, tile, detailed, seamless texture, tileable texture,
                                                                        repetitive, consistent, blue, trending on artstation, sharp focus, studio photo,
                                                                        intricate details, highly detailed, by greg rutkowski</p>
                                                                </div>
                                                                <div className="w-8 flex-none">
                                                                    <div className="absolute bottom-3 right-3 flex items-center"><span className /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex', flexDirection: 'column', placeContent: 'stretch flex-start',
                                        flex: '1 1 0%', width: '0px', gap: '16px'
                                    }}>
                                        <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(1, minmax(0px, 1fr))' }}>
                                            <div id="image-cl9un5fs10bo0s6015f1xkpg8"
                                                className="flex flex-col items-center rounded-lg select-none"><a
                                                    className="Image_image__0SSoU transition-all image-card-grid "
                                                    href="/post/cl9un5fs10bo0s6015f1xkpg8" style={{ transitionDelay: '0.188342s' }}><img
                                                        src="https://storage.googleapis.com/pai-images/e2510cccc92543cd971324be9314d34d.jpeg"
                                                        alt="Prompt: A bag of ice" style={{ aspectRatio: '1 / 1', objectFit: 'fill' }} />
                                                    <div className="flex justify-end sm:hidden w-full absolute z-10 right-2 top-2"><span
                                                        className="bg-black/60 rounded-md backdrop-blur-md">
                                                        <div
                                                            className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                            aria-label="Toggle like">
                                                            <div className="relative ">
                                                                <div
                                                                    className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                    <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                        height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                            width: '100%',
                                                                            height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                            contentVisibility: 'visible'
                                                                        }}>
                                                                        <defs>
                                                                            <clipPath id="__lottie_element_3047">
                                                                                <rect width={1080} height={1080} x={0} y={0} />
                                                                            </clipPath>
                                                                        </defs>
                                                                        <g clipPath="url(#__lottie_element_3047)">
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g style={{ display: 'none' }}>
                                                                                <g>
                                                                                    <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                        strokeMiterlimit={4} />
                                                                                </g>
                                                                            </g>
                                                                            <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                opacity={1} style={{ display: 'block' }}>
                                                                                <g opacity={1}
                                                                                    transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                    <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                        d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                    viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="overflow-visible">
                                                                    <path
                                                                        d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                        stroke="currentColor" strokeWidth={20} />
                                                                </svg></span>
                                                            </div>
                                                        </div>
                                                    </span></div>
                                                    <div className="Image_image__overlay__q5mly max-h-full"><a
                                                        className="Image_image__0SSoU transition-all image-card-grid "
                                                        href="/post/cl9un5fs10bo0s6015f1xkpg8" style={{ transitionDelay: '0.188342s' }} />
                                                        <div className="justify-between items-center flex mt-1 pl-1"><a
                                                            className="Image_image__0SSoU transition-all image-card-grid "
                                                            href="/post/cl9un5fs10bo0s6015f1xkpg8" style={{ transitionDelay: '0.188342s' }}><span
                                                                className="truncate" /></a><a href="/profile/cl94ftvbo37193401s6us59o1du"
                                                                    className="author-avatar truncate flex items-center whitespace-normal text-[14px] text-white font-bold gap-2 pointer-events-auto"><img
                                                                    src="/avatar.svg" alt="Len Milliron avatar" width="25px" height="25px"
                                                                    className="rounded flex-none" referrerPolicy="no-referrer" /><span
                                                                        className="truncate">Len Milliron</span></a>
                                                            <div className="flex items-center gap-x-2 right-0">
                                                                <div
                                                                    className="LikeButton_like_button__z_ico p-2 inline   flex gap-x-1.5 items-center rounded-md leading-[20px]"
                                                                    aria-label="Toggle like">
                                                                    <div className="relative ">
                                                                        <div
                                                                            className="w-6 h-6 scale-[3.8] absolute right-[-1.5px] top-[-1px] pointer-events-none opacity-0">
                                                                            <div /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width={1080}
                                                                                height={1080} preserveAspectRatio="xMidYMid meet" style={{
                                                                                    width: '100%',
                                                                                    height: '100%', transform: 'translate3d(0px, 0px, 0px)',
                                                                                    contentVisibility: 'visible'
                                                                                }}>
                                                                                <defs>
                                                                                    <clipPath id="__lottie_element_1452">
                                                                                        <rect width={1080} height={1080} x={0} y={0} />
                                                                                    </clipPath>
                                                                                </defs>
                                                                                <g clipPath="url(#__lottie_element_1452)">
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g style={{ display: 'none' }}>
                                                                                        <g>
                                                                                            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0}
                                                                                                strokeMiterlimit={4} />
                                                                                        </g>
                                                                                    </g>
                                                                                    <g transform="matrix(0.5242400169372559,0,0,0.5242400169372559,417.20806884765625,420.1867980957031)"
                                                                                        opacity={1} style={{ display: 'block' }}>
                                                                                        <g opacity={1}
                                                                                            transform="matrix(1,0,0,1,247.74899291992188,211.64199829101562)">
                                                                                            <path fill="rgb(255,77,136)" fillOpacity={1}
                                                                                                d=" M198.1739959716797,-162.06700134277344 C148.85000610351562,-211.39199829101562 68.87899780273438,-211.39199829101562 19.55500030517578,-162.06700134277344 C8.755000114440918,-151.26699829101562 -8.755999565124512,-151.26699829101562 -19.55500030517578,-162.06700134277344 C-68.87999725341797,-211.39199829101562 -148.85000610351562,-211.39199829101562 -198.1750030517578,-162.06700134277344 C-247.49899291992188,-112.74299621582031 -247.49899291992188,-32.77199935913086 -198.1750030517578,16.552000045776367 C-198.1750030517578,16.552000045776367 -178.61900329589844,36.106998443603516 -178.61900329589844,36.106998443603516 C-178.61900329589844,36.106998443603516 -7.449999809265137,207.2760009765625 -7.449999809265137,207.2760009765625 C-3.3359999656677246,211.39100646972656 3.3350000381469727,211.39100646972656 7.448999881744385,207.2760009765625 C7.448999881744385,207.2760009765625 178.61900329589844,36.106998443603516 178.61900329589844,36.106998443603516 C178.61900329589844,36.106998443603516 198.1739959716797,16.552000045776367 198.1739959716797,16.552000045776367 C247.49899291992188,-32.77199935913086 247.49899291992188,-112.74299621582031 198.1739959716797,-162.06700134277344z" />
                                                                                        </g>
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                        </div><span className="transition-all overflow-visible "><svg width={20} height={20}
                                                                            viewBox="0 0 247 215" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                            className="overflow-visible">
                                                                            <path
                                                                                d="M33.5343 119.395L33.5342 119.395L23.2823 109.144C23.2823 109.144 23.2822 109.144 23.2822 109.144C-0.427431 85.4339 -0.427399 46.9924 23.2823 23.2827C46.9925 -0.427563 85.4336 -0.427563 109.144 23.2827C116.953 31.0925 129.616 31.0922 137.425 23.2827L133.536 19.3936L137.425 23.2826C161.135 -0.42755 199.576 -0.42755 223.286 23.2826L227.175 19.3936L223.286 23.2827C246.996 46.9925 246.996 85.434 223.286 109.144L226.851 112.709L223.286 109.144L213.035 119.395L123.3 209.129L123.3 209.129C123.297 209.132 123.295 209.134 123.294 209.135C123.292 209.135 123.289 209.136 123.284 209.136C123.28 209.136 123.276 209.135 123.275 209.135C123.273 209.134 123.271 209.132 123.268 209.129L123.268 209.129L33.5343 119.395Z"
                                                                                stroke="currentColor" strokeWidth={20} />
                                                                        </svg></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="Image_image__overlay_description__KBarZ ">
                                                            <div className="flex justify-between items-end">
                                                                <div className="flex-grow pl-2 overflow-hidden">
                                                                    <h4 className="text-white text-left font-bold ">A bag of ice</h4>
                                                                    <p className="w-full text-white line-clamp-4">A bag of ice</p>
                                                                </div>
                                                                <div className="w-8 flex-none">
                                                                    <div className="absolute bottom-3 right-3 flex items-center"><span className /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span id="__chakra_env" hidden />
    </div>
}