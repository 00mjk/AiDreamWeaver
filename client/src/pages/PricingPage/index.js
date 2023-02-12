import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

const PricingPage = () => {
    // Use Redux
    const dispatch = useDispatch();
    const pricingObj = useSelector(state => state.pricingObj)
    const authObj = useSelector(state => state.auth)

    // Redirect Module
    const navigate = useNavigate()

    // States
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        setRoles(pricingObj.roles);
    }, [pricingObj.roles])

    const checkout = (price) => {
        navigate('/checkout?price=' + price);
    }

    return <>
        <div className="text-white text-center py-10 bg-[#05020E]">
            <p className="text-pai-blue uppercase tracking-widest">Pricing</p>
            {/* <h1 className="text-4xl font-bold text-white pt-8">Create like a Pro</h1> */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg px-5 mx-auto py-10">
                {
                    roles.map((role, key) =>
                        <div className="pricing-card relative flex flex-col divide-y divide-white/10" key={key}>
                            <div className="pb-8 space-y-4">
                                <p className="text-white/90 text-lg flex justify-center">{role.role}</p>
                                <h2 className="text-white/90 text-3xl leading-6 font-bold text-white">{role.role}</h2>
                            </div>
                            <div className="flex flex-col h-full justify-between gap-8">
                                <ul className="text-left space-y-2 pt-8">
                                    <span className="text-left font-semibold" />
                                    {
                                        role?.contents.map((content, key) =>
                                            <li className="text-base font-medium leading-[1.5] flex ">
                                                <span className="text-pai-blue h-full w-7 pt-1 scale-125 flex">
                                                    <DoneOutlineOutlinedIcon fontSize='string' />
                                                </span>
                                                <p>{content}</p>
                                            </li>)
                                    }
                                </ul>
                                {
                                    (role?.index <= authObj?.user?.role_idx) ?
                                        <button className="bg-pai-blue hover:bg-[#899CFF] transition-all rounded-xl py-3 px-2 font-semibold text-white block w-full" onClick={() => navigate('/create')}>Create</button>
                                        :
                                        <button className="bg-pai-blue hover:bg-[#899CFF] transition-all rounded-xl py-3 px-2 font-semibold text-white block w-full" onClick={() => checkout(role.price)}>Buy</button>
                                }

                            </div>
                        </div>
                    )
                }
            </section>
            <p className="text-center">Email <a className="text-pai-blue" href="mailto:support@playgroundai.com">support@test.com</a> if you're looking for a team plan.</p>
        </div>
    </>
}

export default PricingPage;