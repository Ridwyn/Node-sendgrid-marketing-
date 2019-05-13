Demontrating Email Compaign with sendgrid api using node

**\*Requirements**
Node 8 or higher
Git

**SetUp/ Installation**
Clone the reposistory and install dependecies as follows.

- git clone 
- cd current directory
- npm install


**\*Dependencies**
- express
- dotenv (read .env files)
- request (make http requests)


##In sendgrid.js(controller to make request to sendgrid api)
- Replace process.env.API_KEY with sendgrid api key

##Start server on locahost
### npm run app (using hot reload nodemon) or
### npm run start

## GET Routes 
- /recipients (get all recipients/contacts)
- /lists (get all lists)
- /compaigns (get all compaings)

## POST Routes
- /create-list ( to create a list JSON body {"name":"name_of_yourlist"})
- /create-recipient (to create a contact JSON body {"email":"text@test.com","first_name":"john","last_name":"doe"})
- /create-compaign (to create a new comapign JSON body {
        "title": "title_of_comapign",
        "subject":"subject_of_email",
        "sender_id": "445951",
        "list_ids": "list_id",
        "categories":"category of email type eg.marketing",
        "suppression_group_id":"9264",
        "emailBody": "body of email to send"
    })
- /send-compaign (to send a compaign request with header "compaign_id":"id_of_compaign as value")

## Patch Routes
- /update-recipient(updating a contact info insert the contatc email to match {"email":"email_to_match","first_name":"new_firstname","last_name":"new_last_name"})

## Delete Routes
- /delete-recipient ( request with header "id":"id_of_recipient as value")
- /delete-compaign ( request with header "compaign_id":"id_of_recipient value")


##Send one-off email 
1. Open serve.js
2. Edit content of serve.js to send to sepcified email
3. run node serve 