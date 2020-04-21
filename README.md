# GraphQL CRUD Sample
-------------------------------------------

```
mutation signupUser{
  signupUser(data: {
    name:"Frank"
    lastname:"Frank@Tank"
    publickey:"6666"  
	}){
 		token 
	}
}

mutation loginUser{
  loginUser(data: {
    lastname:"ZName"
    publickey:"6666"  
	}){
 		token 
	}
}


mutation updateUser($data: UserUpdateInput!){
  updateUser(data: $data){
		message
  }
}

mutation deleteUser($data: UserId!){  
  deleteUser(data: $data){
		message  
  }
}

mutation deleteAll{
    deleteAll{
		message  
  }
}

query findAllUsers{  
  users{
    id
    name
    lastname
    publickey
  }
}

query findOneUserById($data: UserId!){  
  usersById(data: $data){
    id
    name
    lastname
  }
}

query findUsersByLastName($data: UserLastName!){  
  usersByLastName(data: $data){
    id
    name
    lastname
  }
}
```

HTTP HEADERS
------------------------------------

```

{
    "authorization": " ... "
    }
```

QUERY VARIABLES
------------------------------------

```

{ "data": { "id" : 8} }

{ "data": { "lastname" : "wendy"} }

{ "data": 
  { 
    "id": "62",
    "name": "Cinti@friday",
    "lastname": "CintiFRIDAY"    
	} 
}

```
