const Authclient = require('../api/authclient')
const { test, expect } = require('@playwright/test')
const AuthPayload = require('../payloads/authPayload')


let token;
test('Auth', async ({ request }) => {

    const authclient = new Authclient(request)
    const response = await authclient.login(AuthPayload.login);

    //Login
    expect(response.status()).toBe(200)
    const body = await response.json()
    expect(body).toHaveProperty('accessToken')
    token = body.accessToken
    // console.log(token)

    //Getprofile
    const response3 = await authclient.getProfile({
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    expect(response3.status()).toBe(200)
    const body1 = await response3.json()
    // console.log(body1)

    expect(body1).toHaveProperty('firstName')
    expect(body1).toHaveProperty('lastName')
    expect(body1).toHaveProperty('age')

    expect(body1.firstName).toBe('Emily')
    expect(body1.lastName).toBe('Johnson')
    //    console.log(body1.age)


    //RefreshToken
    const response4 = await authclient.refreshToken({
        headers: {
            Authorization: `Bearer ${token}`
        }

    })
    expect(response4.status()).toBe(200)
    const body2 = await response4.json()
    // console.log(body2)
    expect(body2).toHaveProperty('refreshToken')
    // console.log(body2.refreshToken)


    //Logout
    const response1 = await authclient.logout({
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    expect(response1.status()).toBe(200)



});