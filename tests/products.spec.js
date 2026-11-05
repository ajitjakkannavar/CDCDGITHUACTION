const ProductPayload = require('../payloads/productPayload')
const ProductClient = require('../api/productsclient')
const { test, expect, request } = require('@playwright/test')


const Authclient = require('../api/authclient')
const AuthPayload = require('../payloads/authPayload')

let token;
test('Products', async ({ request }) => {
    const authclient = new Authclient(request)
    const response = await authclient.login(AuthPayload.login);

    //Login
    expect(response.status()).toBe(200)
    const body1 = await response.json()
    expect(body1).toHaveProperty('accessToken')
    token = body1.accessToken
    // console.log(token)


    const productClient = new ProductClient(request)
    //search
    const response1 = await productClient.search({ total: 194 }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    expect(response1.status()).toBe(200)
    const body2 = await response1.json()
    expect(body2).toHaveProperty('total')
    expect(body2.total).toEqual(194)
    console.log(body2.total)


    //GetproductByID
    const productId = 1
    const response2 = await productClient.getProductById(productId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    expect(response2.status()).toBe(200)
    const body3 = await response2.json()
    expect(body3).toHaveProperty('id')
    expect(body3.id).toBe(productId)

    //Add Product
    const response3=await productClient.add(ProductPayload.createProduct,{
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
    expect(response3.status()).toBe(201)
    const body4 = await response3.json()
    console.log(body4)

    expect(body4).toHaveProperty('title')
    expect(body4).toHaveProperty('description')
    expect(body4).toHaveProperty('price')
    expect(body4).toHaveProperty('category')
    
    expect(body4.title).toBe('QA Automation Book')
    expect(body4.price).toBe(100)
    expect(body4.description).toBe('Playwright automation testing')
    expect(body4.category).toBe('books')

   
   

})
