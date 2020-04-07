# grapqhl-jwt-test


mutation singupUser{
  signupUser(data: {
    lastname:"fmercury"
    name:"fran"
    publickey:"666"  
	}){
 		token 
	}
}

mutation loginUser{
  loginUser(data: {
    lastname:"fmercury"
    publickey:"666"  
	}){
 		token 
	}
}


query findAll{  
  users{
    lastname
  }
}

----
HTTP HEADERS

{
      "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6ImZyYW4iLCJsYXN0bmFtZSI6ImZiZXJkdW5nbWFpbGNvbSIsInB1YmxpY2tleSI6IiQyYiQwNCR2eDZ3UjE2dmxvTmwxQ0hGc0ZCTXZ1TWMyNlgxS2JWdENFTFYxT3NxdTJ6S0hkaUkvcFpZaSIsImNyZWF0ZWRBdCI6IjIwMjAtMDQtMDdUMDU6MDA6NDUuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDQtMDdUMDU6MDA6NDUuMDAwWiIsImlhdCI6MTU4NjIzNzA2Mn0.DlB4uXHtqzo0F8K-bwejEBi8GYbQs9x0WLDiiPOmnx0"
    }

