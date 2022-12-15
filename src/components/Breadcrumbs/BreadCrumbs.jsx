import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../Breadcrumbs/Breadcrumbs.css"

const BreadCrumbs = (props) => {
    const {data, getId} = props
    return (
        !data?<></>:
        <Breadcrumb >
            {
                data.map((elem, i) => (
                    <Breadcrumb.Item key={elem.nodeId} active={i === data.length - 1 ? true : false} onClick={() => getId(elem.nodeId)} >{elem.name}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    )
}
export default BreadCrumbs
