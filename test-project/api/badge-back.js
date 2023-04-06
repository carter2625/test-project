export default async function handler(request, res) {
const search = req.query.search || '';


    var badge = [
      {
        "name": "Caleb Pellerite",
        "creator": "Caleb",
        "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
        "department": "Food Science"
      },
      {
        "name": "A Person",
        "creator": "person",
        "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
        "department": "person at person"
      },
      {
        "name": "Bryan Ollendyke",
        "creator": "Bryan Ollendyke",
        "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
        "department": "IST"
      },
      {
        "name": "Badge Thing",
        "creator": "Steve",
        "image": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
        "department": "a department"
      }
      
    ];
    badge.map((badges) => {
      badges.index = badges.name.toLowerCase() + " " + badges.creator.toLowerCase() + " " + badges.department.toLowerCase();
    });
    badge = badge.filter((badges) => {
      if (badges.index.indexOf(search.toLowerCase()) > -1)  {
        return true;
      }
      return false;
    })
    //let filteredData = badge.filter(
      //(value) =>
      //value["name"].toLowerCase().includes(searchInput.toLowerCase()) || 
      //value["creator"].toLowerCase().includes(searchInput.toLowerCase()) ||
      //value["department"].toLowerCase().includes(searchInput.toLowerCase())
    //);
  
  
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badge);
  
    console.log(badge);
  }
  