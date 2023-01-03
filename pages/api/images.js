export default async function handler(req, res) {
  if (req.method == "GET") {
    async function getImages(url = "") {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      return response.json();
    }
    try {
        const data = await getImages('http://localhost:8000/api/images/');
        res.status(200).json(data)
        
    } catch (error) {
        res.status(401).json(error)
    }

  }else if(req.method == 'POST'){
    console.log('haciendo peticion post');
    async function postImage(url ='', body = {}){
       
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
      
        return response.json()
    }
    try {
        const data = await postImage('http://localhost:8000/api/images/', req.body)
        res.status(201).json(data)
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
  }
}
