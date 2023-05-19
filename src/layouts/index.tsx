import {Outlet} from "react-router-dom";

const LayoutIndex = (props: any) => {
    console.log(props, 'https://github.com/HalseySpicy/Hooks-Admin/blob/master/src/layouts/index.tsx')
    return (
        <div>
            <div>111</div>
            <Outlet/>
        </div>
    )
}

export default LayoutIndex