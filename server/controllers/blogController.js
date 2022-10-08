const slugify = require("slugify")

//Cotroller จะทำหน้าที่ติดต่อกับ DB เเละรับ Request มาจาก Route โดย Controller จะติดต่อการทำงานทั้งสองฝั่งเปรียบเสมือนเป็นตัวกลาง (CRUD ?)

//create เอาไว้บันทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,author} = req.body
    const slug = slugify(req.body.slug)
    res.json({
        data:{title,content,author,slug}
    })
}


//localhost:7777/install-postman