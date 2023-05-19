import {Outlet} from "react-router-dom";

const LayoutIndex = (props: any) => {
    console.log(props, '---')
    return (
        <div>
            <div>111</div>
            <Outlet/>
        </div>
    )
}

export default LayoutIndex