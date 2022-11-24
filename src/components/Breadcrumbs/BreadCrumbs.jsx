import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../Breadcrumbs/Breadcrumbs.css"

const BreadCrumbs = () => {
    let sections = 
   [{ id: 1, name:"Organisational Structure"},
    { id: 2, name: "UI" },
    { id: 3, name: "Backend" },
    { id: 4, name: "Qa" },
    { id: 5, name: "IT" },
    { id: 6, name: "HRs", }]

    const breadcrumbClickHandler = (data) => {
        console.log({ data })
    }
    return (
        <Breadcrumb >
            {
                sections.map((elem, i) => (
                    <Breadcrumb.Item key={elem.id} active={i === sections.length - 1 ? true : false} onClick={() => breadcrumbClickHandler(elem)} >{elem.name}</Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    )
}
export default BreadCrumbs
