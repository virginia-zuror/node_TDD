

const Builder = {
    item:({name='my item', description='testing', price='150', color='undefined'} = {})=>({
        name,
        description,
        price, 
        color,
    })
}

module.exports = Builder;