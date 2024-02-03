const pool = require('../db/pool')
async function getCertificates(req,res){
    const {user_id} = req.query
    try{
        const fromDate = new Date()
        const result = await pool.query('SELECT * FROM backend.certification WHERE user_id = $1', [user_id])
        console.table(result.rows);
        const toDate = new Date()
        const response ={
            rows:result.rows,
            elapsed:toDate.getTime()-fromDate.getTime(),
            method:'pool'
        }
        res.status(200).json(response)
    }
    catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
}

async function addCertificate(req,res){
    //assume that user is currently authed
    //does the active users id come from auth?
    //extra query required if we can only get the auth users email.
    let {user_id,certificate_name,issued_by,url,issue_date,expiry_date} = req.body;

    if(!issue_date){
        issue_date = new Date();
    }

    if(!user_id || !certificate_name || !issued_by || !url){
        return res.status(400).json({err:"All required parameters not sent"})
    }
    else{
        try{
            const result = await pool.query('INSERT INTO backend.certification(user_id, certificate_name, issued_by, url, issue_date, expiry_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [user_id, certificate_name, issued_by, url, issue_date, expiry_date]);
            console.log(result.rows[0])
            res.status(200).json(result.rows[0]);
        }
        catch (err){
            res.status(500).send(err.message);
        }
    }
}
async function editCertificate(req,res){
    //extra query required if we can only get the auth users email.
    let {id,user_id,certificate_name,issued_by,url,issue_date,expiry_date} = req.body;
    if(!id || !user_id){
        return res.status(400).json({err:"Missing parameters certificate id / owner id"})
    }
    if(!certificate_name || !issued_by || !url ) {
        return res.status(400).json({err:"Missing certificate info"})
    }
    if(!issue_date){
        issue_date=new Date()
    }

    try{
        const ownerCheck = await pool.query("select id from backend.certification where id=$1 and user_id=$2",[id,user_id])
        if(ownerCheck.rows.length===0){
            return res.status(401).json({err:"Either the certificate is not yours, or it does not exist"})
        }
        else{
            try{
                const result = await pool.query("update backend.certification set certificate_name=$1,issued_by=$2,url=$3,issue_date=$4,expiry_date=$5 where id=$6 and user_id=$7 returning *",
                    [certificate_name,issued_by,url,issue_date,expiry_date,id,user_id]);

                console.log(result.rows[0])
                res.status(200).json(result.rows[0])
            }
            catch (err){
                console.log(err.message);
                res.status(500).json({err:err.message})
            }
        }

    }
    catch (err){
        console.log(err.message);
        res.status(500).json({err:err.message})
    }
}
async function deleteCertificate(req,res){
    //extra query required if we can only get the auth users email.
    const {id,user_id} = req.body;

    if(!id || !user_id){
        return res.status(400).json({err:"Missing parameters"})
    }
    try{
        //bug:request on load when the id does not exist
        const ownerCheck = await pool.query("select id from backend.certification where id=$1 and user_id=$2",[id,user_id])
        if(ownerCheck.rows.length===0){
            return res.status(401).json({err:"Either the certificate is not yours, or it does not exist"})
        }
        else{
            try{
                const result = await pool.query("delete from backend.certification where id=$1",[id]);
                res.status(200).json({status:"deleted"});
            }
            catch (err){
                console.log(err.message)
            }
        }
    }
    catch (err){
        console.log(err.message)
    }
}

module.exports= {
    getCertificates,
    addCertificate,
    editCertificate,
    deleteCertificate
}