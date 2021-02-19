const component = (props) => (
    <div id="class-container">
        <h2>Clase de {props.name}</h2>
        {props.class.map(item => {
            return (
                <div key={item.id} className="class-list">
                    <img src={item.photo} alt="" />
                    <p>{item.first_name} {item.last_name}</p>
                </div>
            )
        })}
        <style jsx>
            {
                `
                #class-container{
                    perspctive: 500px;
                }
                .class-list{
                    display: flex;
                }
                .class-list img{
                    padding: 3px;
                    border: 1px solid #ccc;
                }
                .class-list p{
                    font-size: 12px;
                    font-weight: bold;
                    font-style: italic;
                    margin-left: 12px;
                }
                .class-list:hover{
                    transform: translateY(10px) scale(1);
                }
                `
            }
        </style>
    </div>
)

export default component;