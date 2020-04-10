const tester = require('graphql-tester').tester;

let token = ""

describe('Any', function () {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: `http://127.0.0.1:4000/graphql`,
            contentType: 'application/json'
        });
    });

    it('should create a new user', done => {
        self
            .test(
                JSON.stringify({
                    query: `mutation signupUser($data: UserCreateInput!) {
                            signupUser(data: $data) {
                            token
                            }
                        }`,
                    variables: {
                        data: {
                            name: 'Frank',
                            lastname: '@Tank',
                            publickey: '6666'
                        }
                    }
                }),
                { jar: true }
            )
            .then(res => {
                expect(res.data.signupUser.token).toBeDefined();
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });

    it('should login with credentials', done => {
        self
            .test(
                JSON.stringify({
                    query: `mutation loginUser($data: UserLoginInput!) {
                            loginUser(data: $data) {
                            token
                            }
                        }`,
                    variables: {
                        data: {
                            lastname: '@Tank',
                            publickey: '6666'
                        }
                    }
                }),
                { jar: true }
            )
            .then(res => {
                expect(res.data.loginUser.token).toBeDefined();
                token = res.data.loginUser.token;
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });

});

describe('A user', function () {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: `http://127.0.0.1:4000/graphql`,
            authorization: `${token}`,
            contentType: 'application/json'
        });
    });

    it('should access with correct credentials', done => {
        self
            .test(
                JSON.stringify({
                    query: `query findAllUsers{  
                            users{
                                id
                                name
                                lastname
                                publickey
                            }
                        }`,
                    variables: {
                    }
                }),
                { jar: true }
            )
            .then(res => {
                expect(res.data.users).toBeDefined();
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });

    it('should get user by ID', done => {
        self
            .test(
                JSON.stringify({
                    query: `query findOneUserById($data: UserId!){  
                            usersById(data: $data){
                                id
                                name
                                lastname
                            }
                            }`,
                    variables: {
                        data: { 
                            id: 61
                        }
                    }
                }),
                { jar: true }
            )
            .then(res => {
                expect(res.data.usersById).toBeDefined();
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });
    
    it('should update user information', done => {
        self
            .test(
                JSON.stringify({
                    query: `mutation updateUser($data: UserUpdateInput!){
                            updateUser(data: $data){
                                    message
                            }
                            }`,
                    variables: {
                        data: {
                            id: 62,
                            name: 'Cinti@friday',
                            lastname: 'CintiFRIDAY',
                            publickey: 'FRIDAY NIGHT'
                        }
                    }
                }),
                { jar: true }
            )
            .then(res => {
                //console.log(res.data)
                expect(res.data.updateUser).toBeDefined();
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });

    it('should removed user by ID', done => {
        self
            .test(
                JSON.stringify({
                    query: `mutation deleteUser($data: UserId!){  
                            deleteUser(data: $data){
                                    message  
                            }
                            }`,
                    variables: {
                        data: {
                            id: 63
                        }
                    }
                }),
                { jar: true }
            )
            .then(res => {
                expect(res.data.deleteUser).toBeDefined();
                expect(res.status).toBe(200);
                expect(res.success).toBe(true);
                done();
            })
            .catch(err => {
                expect(err).toBe(null);
                done();
            });
    });


});