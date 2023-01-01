function ItemCard({item}){
    return(
        <div className="border-4 border-black rounded-lg w-80 bg-gray-100">
            <img src={item.imgUrl} className='border-2 border-black '/>
            <p className="p-2">Name of the blanket: {item.name}</p>
        </div>
    )
}

export default ItemCard;