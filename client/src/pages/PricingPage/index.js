import { useNavigate } from 'react-router-dom';

import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

const PricingPage = () => {
    // Redirect Module
    const navigate = useNavigate()

    return <>
        <div className="text-white text-center py-10 bg-[#05020E]">
            <p className="text-pai-blue uppercase tracking-widest">Pricing</p>
            {/* <h1 className="text-4xl font-bold text-white pt-8">Create like a Pro</h1> */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg px-5 mx-auto py-10">
                <div className="pricing-card relative flex flex-col divide-y divide-white/10">
                    <div className="pb-8 space-y-4">
                        <p className="text-white/90 text-lg flex justify-center">Free</p>
                        <h2 className="text-white/90 text-3xl leading-6 font-bold text-white">Free</h2>
                    </div>
                    <div className="flex flex-col h-full justify-between gap-8">
                        <ul className="text-left space-y-2 pt-8">
                            <span className="text-left font-semibold" />
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Create 100 images per month</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Use images commercially</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Setting limits</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Fixed image dimensions</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Generate one image at a time</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Limits on quality and details</p>
                            </li>
                        </ul>
                        <button className="bg-pai-blue hover:bg-[#899CFF] transition-all rounded-xl py-3 px-2 font-semibold text-white block w-full" onClick={() => navigate('/create')}>Create</button>
                    </div>
                </div>
                <div className="pricing-card relative flex flex-col divide-y divide-white/10">
                    <div className="pb-8 space-y-4">
                        <p className="text-white/90 text-lg flex justify-center">$19</p>
                        <h2 className="text-white/90 text-3xl leading-6 font-bold text-white">$19/month</h2>
                    </div>
                    <div className="flex flex-col h-full justify-between gap-8">
                        <ul className="text-left space-y-2 pt-8">
                            <span className="text-left font-semibold" />
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Create 1,000 images per month</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Multiple model usage</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>No limits on settings</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>No limits on quality and details (steps)</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Faster image generation</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Permanent Private mode</p>
                            </li>
                        </ul>
                        <button className="bg-pai-blue hover:bg-[#899CFF] transition-all rounded-xl py-3 px-2 font-semibold text-white block w-full">Buy</button>
                    </div>
                </div>
                <div className="pricing-card relative flex flex-col divide-y divide-white/10">
                    <div className="pb-8 space-y-4">
                        <p className="text-white/90 text-lg flex justify-center">$29</p>
                        <h2 className="text-white/90 text-3xl leading-6 font-bold text-white">$29/month</h2>
                    </div>
                    <div className="flex flex-col h-full justify-between gap-8">
                        <ul className="text-left space-y-2 pt-8"><span className="text-left font-semibold" />
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Create 2,000 images per month</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Multiple model usage</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>No limits on settings</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>No limits on quality and details (steps)</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Faster image generation</p>
                            </li>
                            <li className="text-base font-medium leading-[1.5] flex ">
                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                </span>
                                <p>Permanent Private mode</p>
                            </li>
                        </ul>
                        <button className="bg-pai-blue hover:bg-[#899CFF] transition-all rounded-xl py-3 px-2 font-semibold text-white block w-full">Buy</button>
                    </div>
                </div>
            </section>
            <p className="text-center">Email <a className="text-pai-blue" href="mailto:support@playgroundai.com">support@test.com</a> if you're looking for a team plan.</p>
        </div>
    </>
}

export default PricingPage;