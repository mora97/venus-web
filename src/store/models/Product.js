class Product {
    constructor(productData = {}) {
        this.productID = productData.ProductID
        this.title = productData.title
        this.latinTitle = productData.LatinTitle
        this.anotherTitle = productData.AnotherTitle
        this.review = productData.Review
        this.positivePoints = productData.PositivePoints
        this.negativePoints = productData.NegativePoints
        this.brandName = "Puma"
        this.unit = productData.unit
    }
}

export default Product;