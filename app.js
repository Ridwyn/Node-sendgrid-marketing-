const express = require('express')
const sendgrid = require('./sendgrid.js');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT ||3000


// RETRIEVING CONTACT
app.get('/recipients',(req,res)=>{
    sendgrid.fetch('https://api.sendgrid.com/v3/contactdb/recipients')
    .then(resolve=>{res.json(resolve.body)}) 
})
app.get('/recipient',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}`)
    .then((resolve,reject)=>{ res.json(resolve.body)
        // console.log(req.headers.id)
    })     
})
// GET LIST RECIPIENT BELONG TO
app.get('/recipient-belong-to',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}/lists`)
    .then(resolve=>{ res.json(resolve)
        // console.log(req.query.id)
    }) 
})

// RETRIEVING CONTACT LIST
app.get('/lists',(req,res)=>{
    sendgrid.fetch('https://api.sendgrid.com/v3/contactdb/lists').then(resolve=>{ res.json(resolve.body)})
})
app.get('/list',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}`)
    .then(resolve=>{ res.json(resolve.body)
        console.log(req.query.id)
    }) 
})
//Get all recipients in a list
app.get('/list-recipients',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}/recipients`)
    .then(resolve=>{ res.json(resolve.body)
        console.log(req.query.id)
    }) 
})


// MAKING A LIST
 //Creating single contact list
app.post('/create-list', (req, res) => {   
    sendgrid.add('https://api.sendgrid.com/v3/contactdb/lists',{name:`${req.body.name}`})
    .then(resolve=>{res.send(resolve.statusMessage)})
})

// CREATING RECIPIENT
app.post('/create-recipient', (req, res) => {
    let contacts=[]  
    if(Array.isArray(req.body)){
        req.body.forEach(contact => {
            contacts.push({email:contact.email,first_name:contact.first_name,last_name:contact.last_name})
        });
         sendgrid.add('https://api.sendgrid.com/v3/contactdb/recipients',contacts).then(resolve=>{res.send(resolve.body),contacts=[]})
 
    }else{
        contacts.push({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name})
        sendgrid.add('https://api.sendgrid.com/v3/contactdb/recipients',contacts).then(resolve=>{res.send(resolve.body),contacts=[]})
    }   
})


// ADD RECIPIENTS TO CONTACT LIST BY ID

app.post('/add-to-list', (req, res) => { 
    let contactsId=[]
    if(Array.isArray(req.body)){
        req.body.forEach(recipient => {
            contactsId.push(recipient.id,)
        });
        sendgrid.add(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}/recipients`,contactsId).then(resolve=>{res.send(resolve.statusMessage), contactsId=[]})
 
    }else{
        contactsId.push(req.body.id)
        sendgrid.add(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}/recipients`,contactsId).then(resolve=>{res.send(resolve.statusMessage ),contactsId=[]})
    }    
})

// REMOVE RECIPIENT FROM LIST
app.delete('/remove-from-list',(req,res)=>{
    sendgrid.deleting(`https://api.sendgrid.com/v3/contactdb/lists/${parseInt(req.body.list_id)}/recipients/${req.body.recipient_id}`)
    .then(resolve=>{res.send(resolve.body)})
})

// UPDATING A CONTACT

app.patch('/update-recipient', (req, res) => { 
    let recipientUpdate= []
        recipientUpdate.push({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name})
        sendgrid.update(`https://api.sendgrid.com/v3/contactdb/recipients?id=${req.headers.id}`,recipientUpdate).then(resolve=>{res.status(resolve.statusCode).send(resolve.statusMessage), recipientUpdate=[]})
   
})

// DELETING A RECIPIENT
app.delete('/delete-recipient', (req, res) => {   
    sendgrid.deleting(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}`)
    .then(resolve=>{res.send(resolve.body)})
})

// RETRIEVE ALL COMPAIGNS
app.get('/compaigns', (req, res) => {   
    sendgrid.fetch(`https://api.sendgrid.com/v3/campaigns`)
    .then(resolve=>{res.send(resolve.body)})
})
// RETRIEVE S INGLE COMPAIGN
app.get('/compaign', (req, res) => { 
    sendgrid.fetch(`https://api.sendgrid.com/v3/campaigns/${parseInt(req.headers.compaign_id)}`)
    .then(resolve=>{res.send(resolve.body)})
})

// CREATING COMPAINGS
app.post('/create-compaign', (req, res) => {   
    let body={
        title: `${req.body.title}`,
        subject:`${req.body.subject}`,
        sender_id: `${parseInt(req.body.sender_id)}`,
        list_ids: [parseInt(req.body.list_ids)],
        segment_ids: [  ],
        categories: [req.body.categories]||'No category added',
        suppression_group_id:9264,
        custom_unsubscribe_url: '',
        ip_pool: '',
        html_content: `<html><head><title></title></head><body>
        <h2>${req.body.emailBody} <h2>
        <p></p><a href="[unsubscribe]">Click here to unsubscribe</a>
        </body></html>`,
        plain_content: `${req.body.emailBody}<p><a href="[unsubscribe]">Click here to unsubscribe</a>
        ` 
    }
        if(req.body.title!==''||req.body.subject!==''||req.body.emailBody!==''){
            sendgrid.add(`https://api.sendgrid.com/v3/campaigns`,body)
            .then(resolve=>{res.send(resolve.body), body={}})
        }
})

// DELETING A COMPAIGN
app.delete('/delete-compaign', (req, res) => {   
    sendgrid.deleting(`https://api.sendgrid.com/v3/campaigns/${req.headers.compaign_id}`)
    .then(resolve=>{res.send(resolve.body)})
})

// SEND A COMPAIGN
app.post('/send-compaign', (req, res) => { 
    sendgrid.add(`https://api.sendgrid.com/v3/campaigns/${parseInt(req.headers.compaign_id)}/schedules/now`)
    .then(resolve=>{res.send(resolve.body)})
})






app.listen(port, () => console.log(`Example app listening on port ${port}!`))

