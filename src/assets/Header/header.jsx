const Html = ({img, title, description}) => {
    return (
        <> 
            <img src={img} alt="Stylized atom"/>
            <h1>{title}</h1>
             <p>{description}</p>
        </>
        
    )
}

export default Html;