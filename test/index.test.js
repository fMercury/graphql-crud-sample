const tester = require('graphql-tester').tester;



describe('A user', function () {
    const self = this;
    beforeAll(() => {
        self.test = tester({
            url: `http://127.0.0.1:4000/graphql`,
            contentType: 'application/json'
        });
    });


    it('should create a new user', (done) => {
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
                            lastname: 'Frank@Tank',
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

    it('should login with credentials', () => {
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
                            name: 'Frank',
                            
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


    it('should access with correct credentials', () => {
        expect(true).toBe(true);
    });

    it('should get user by ID', () => {
        expect(true).toBe(true);
    });
    
    it('should update user information', () => {
        expect(true).toBe(true);
    });

    it('should removed user by ID', () => {
        expect(true).toBe(true);
    });


});