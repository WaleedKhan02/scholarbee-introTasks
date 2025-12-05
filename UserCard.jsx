export default function CardComponent({Users}) {
    return (
        <div>
            <h3> Hello there, I am {Users.name} and I am {Users.age} years old with id {Users.id}</h3>
        </div>
    )
}
