import { useSelector } from 'react-redux';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const OptModel = (props) => {
    // Use Redux
    const authObj = useSelector(state => state.auth);

    return <>
        <fieldset className="create-fieldset py-8">
            <label htmlFor="model-type">Model</label>
            <div className="select">
                <select name="model-type" id="model-type" onChange={e => props?.onChange(e.target.value)}>
                    <option value="stable-diffu">Stable Diffusion v1.5</option>
                    {
                        (authObj?.user?.role_idx == 1 || authObj?.user?.role_idx == 2) &&
                        <>
                            <option value="stable-diffu">Stable Diffusion v2</option>
                            <option value="stable-diffu">Stable Diffusion v3</option>
                            <option value="midjourney">MidJourney v4</option>
                            <option value="protogen-3.4">Protogen x3.4</option>
                            <option value="realistic-vision-v13">Realistic Vision v1.3</option>
                            <option value="project-unreal-engin">Project Unreal Engine 5</option>
                            <option value="t-shirt-prin">T-shirt print designs</option>
                            <option value="anything-v4">Anything v4</option>
                            <option value="dream-shaper-8797">Dream Shaper</option>
                            <option value="vintedois-diffusion">Vintedois</option>
                            <option value="f222-diffusion">F222</option>
                            <option value="animefull2">animefull2</option>
                        </>
                    }
                </select>
                <ExpandMoreOutlinedIcon fontSize='small' />
            </div>
        </fieldset>
    </>;
}

export default OptModel;