<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\facades\Hash;
use Illuminate\Support\Facades\DB;
use PHPMailer\PHPMailer\PHPMailer;

class userController extends Controller
{
    function register(Request $req)
    {
        $user = new User;
        $user->student_id= $req->input('student_id');
        $user->name= $req->input('name');
        $user->role= $req->input('role');
        $user->email= $req->input('email');
        $result = DB::select('select * from users where email = ?',[$req->input('email')]);
        if(count($result)==0){
            $user->password= $req->input('password');
            $user->save();
            $role = $req->input('role');
            $SchoolId = $req->input('school_id');
            $id = $req->input('student_id');
            $result=DB::scalar('SELECT LAST_INSERT_ID()');
            $temp = 0;
            switch ($role){
                case 'student':
                    $result = DB::insert('insert into student(id,school_id) values(?,?)',[$result,$SchoolId]);
                    $temp = 1;
                    break;
                    // $result = DB::select('select * from student where id = :x',['x'=>(DB::scalar('SELECT LAST_INSERT_ID()'))]);
                    case 'schooladmin':
                        $result = DB::insert('insert into schooladmin(id,school_id) values(?,?)',[$result,$SchoolId]);
                        $temp = 1;
                        break;
                        // $result = DB::select('select * from schooladmin where id = :x',['x'=>(DB::scalar('SELECT LAST_INSERT_ID()'))]);
                        
                        case 'businessowner':
                            $result = DB::insert('insert into businessowner(id,school_id) values(?,?)',[$result,$SchoolId]);
                            $temp = 1;
                            break;
                            // $result = DB::select('select * from businessowner where id = :x',['x'=>(DB::scalar('SELECT LAST_INSERT_ID()'))]);
                            
                            case 'superadmin':
                                $result = DB::insert('insert into superadmin(id,school_id) values(?,?)',[$result,$SchoolId]);
                                $temp = 1;
                                break;
                                // $result = DB::select('select * from superadmin where id = :x',['x'=>(DB::scalar('SELECT LAST_INSERT_ID()'))]);
                            }
                            $mail = new PHPMailer();
                            $mail->isSMTP();
                            $mail->Host = 'smtp.gmail.com';
                            $mail->Port = 587;
                            $mail->SMTPAuth = true;
                            $mail->SMTPSecure = "tls";
                            $mail->Mailer = "smtp";
                            $mail->IsHTML(true);
                            $mail->Username = 'sushrutgamer6@gmail.com';
                            $mail->Password = 'uzsdoapyhevqbdbn';
                            $mail->SetFrom('sushrutgamer6@gmail.com','MarketPlace');
                            $mail->addReplyTo('sushrutgamer6@gmail.com','MarketPlace');
                            $mail->addAddress($req->input('email'));
                            $mail->Subject = 'Welcome';
                            $mail->Body = '<p>Hello !</p><p>Welcome to the student Marketplace.</p>';
                            $mail->send();
                            return [$user,$temp];
                            
        }
        else{
            return 0;
        }
    }
    function login(Request $req)
    {

        $user = User::where('email', $req->email)->where('password',$req->password)->first();
        if(!$user){
            return 0;
        }
        $role = DB::select('select role from users where email = ? AND password = ?',[$req->email,$req->password]);
        return $user;
    }   

    function deleteStudent(Request $req){
        $id = $req->input('studentid');
        $result = DB::delete('delete from student where id = ?',[$id]);
        $result = DB::delete('delete from users where id = ?',[$id]);
        return 'Deleted';
    }
    function deleteBusinessOwner(Request $req){
        $id = $req->input('id');
        $result = DB::delete('delete from product where businessowner = ?',[$id]);
        $result = DB::delete('delete from businessowner where id = ?',[$id]);
        $result = DB::delete('delete from users where id = ?',[$id]);
        return 'Deleted';

    }
    function getuserinfo(Request $req){
        $id = $req->input('id');
        $user = DB::select('select * from users where id = ?', [$id]);

        return $user;

    }

    function addProduct(Request $req){
        $temp = 0;
        $productname = $req->input('product_name');
        $price = $req->input('price');
        $image = $req->file('file')->store('product');
        $description = $req->input('description');
        $businessId = $req->input('BusinessId');
        try{
            $result = DB::insert('insert into product(pname,price,image,description,businessowner) values(?,?,?,?,?)',[$productname,$price,$image,$description,$businessId]);
            $temp = 1;
        }catch(exception $e){
            $temp = 0;
        }
         
        return $temp;
    }
    
    function listProduct(Request $req)
    {
        $BOID =  $req->input('businessowner');
        $product = DB::select('select * from product where businessowner = ?',[$BOID]);
        return $product;
    }
    function allProducts(Request $req){
        $product = DB::select('select * from product');
        return $product;
    }
    function deleteProduct(Request $req){

        $id = $req->input('id');
        $result = DB::delete('delete from product where id = ?',[$id]);
        return "Deleted";
    }    
    function buyProduct()
    {
       
        $quantity = $req->input('quantity');
        $productid = $req->input('productid');
        $businessid = DB::select('select BoId from product where id = ?',[$productid]);
        $amount = $req->input('totalamount');


        try{
            $result = DB::insert('insert into transaction(amount,product_id,businessid) values(?,?,?)',[$amount, $productid, $businessid]);
            $result = DB::insert('update products set stock = stock - ? where BoId = ?',[$quantity, $businessid]); 
            $temp = 1;
        }catch(exception $e){
            $temp = 0;

        }
        return $temp;
    }

    function addclub(Request $req){
        
        $clubname = $req->input('cname');
        $info = $req->input('information');
        $image = $req->file('image')->store('product');
        try{
            $result = DB::insert('insert into club(clubname,information,image) values(?,?,?)',[$clubname,$info,$image]);
            $temp = 1;
        }catch(exception $e){
            $temp = 0;
        }
        return $temp;
    }
    function listClub(Request $req)
    {
        $product = DB::select('select * from club');
        return $product;
    }

    function listClubbyid(Request $req)
    {
        $studentid = $req->input('id');
        $club = DB::select('select club.id, club.clubname, club.information, club.image from club,student where student.id = ? AND club.id = student.club_id',[$studentid]);
        return $club;
    }

    function joinclub(Request $req){

        $studentid = $req->input('id');
        $clubid = $req->input('clubid');

        try{
            $result = DB::update('update student set club_id = ? where id = ?',[$clubid,$studentid]);
            $temp = 1;
        }catch(exception $e){
            $temp = 0;
        }
        return $temp;

    }
    function leaveclub(Request $req){

        $studentid = $req->input('id');
        $clubid = $req->input('clubid');

        try{
            $result = DB::update('update student set club_id = NULL where id = ?',[$studentid]);
            $temp = 1;
        }catch(exception $e){
            $temp = 0;
        }
        return $temp;
    }

    function deleteClub(Request $req){

        $id = $req->input('clubid');
        $result = DB::delete('delete from club where id = ?',[$id]);
        return "Deleted";
    }
    function showstudents(Request $req){

        $result = DB::select('select users.name, student.id, student.club_id FROM users,student where student.id = users.id');
        return $result;
    }

    function showbusinessowners(Request $req){

        $result = DB::select('select users.name, businessowner.id, businessowner.school_id FROM users,businessowner where businessowner.id = users.id');
        return $result;
    }
    function handleAcountReset(Request $req){
        $email = $req->input('useremail'); 
        $result = DB::select('select * from users where email = ?',[$email]);
        if (count($result) > 0)
        {
            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = 587;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = "tls";
            $mail->Mailer = "smtp";
            $mail->IsHTML(true);
            $mail->Username = 'sushrutgamer6@gmail.com';
            $mail->Password = 'uzsdoapyhevqbdbn';
            $mail->SetFrom('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addReplyTo('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addAddress($email);
            $mail->Subject = 'Password Recovery';
            $pwd = rand(100000000,10000000000);
            $mail->Body = '<p>Hello!</p><p>Your new password for Marketplace is '.$pwd.'</p>';
            if($mail->send()){
                DB::update('update users set password = ? where email = ?',[$pwd,$email]);
                return 1; // email sent and password updated
            }
        }
        else{
            return "No Such Username Registered";
        }
        
        
    }
    function getUserCount(Request $req){
        $result = DB::select('select( select count(*) from student) as students,( select count(*) from businessowner)as businessowners, ( select count(*) from schooladmin) as schooladmins');
        return $result;
    }

    function addToCart(Request $req){
        $id = $req->input('id');
        $name = $req->input('name');
        $price = $req->input('price');
        $studentid = $req->input('studentid');
        try{
            $find = DB::select('select * from cart where id = ? and studentid = ?', [$id,$studentid]);
            if(count($find) > 0){
                $result = DB::update('update cart set quantity = quantity + 1 where id = ?',[$id]);
            }
            else{
                $result = DB::insert('insert into cart(id, pname, price, studentid) values(?,?,?,?)',[$id,$name,$price,$studentid]);
            }
            return 1;
        }
        catch(e){
            return 0;
        }

    } 
    function listCart(Request $req){
        $studentid = $req->input('studentid');
        $result = DB::select('select product.image, cart.id, cart.pname, cart.price, cart.quantity from product,cart where product.id = cart.id and studentid = ?',[$studentid]);
        return $result;
    }
    function removeFromCart(Request $req){
        $id = $req->input('id');
        $studentid = $req->input('studentid');
        $result = DB::delete('delete from cart where id = ? and studentid = ?',[$id,$studentid]);
    }

    function addAd(Request $req){
        $data = $req->input('addata');
        $image = $req->file('file')->store('product');
        try{
            $result = DB::insert('insert into advertisements(image,addata) values(?,?)',[$image,$data]);
            return 0;
        }
        catch(e){
            return 1;
        }
    }

    function fetchAd(Request $req){
        $result = DB::select('select * from advertisements');
        return $result;
    }

    function addtoOrders(Request $req){
        $studentid = $req->input('id');
        $result = DB::select('select * from cart where studentid = ?',[$studentid]);
        if(count($result)==0){
            return "1";
        }
        //return $result[0]->id;
        for ($i=0; $i < count($result); $i++) { 
            $productid = $result[$i]->id;
            $quantity = $result[$i]->quantity;
            // echo $productid , ' \n';
            $businessid = DB::scalar('select businessowner from product where id = ?',[$productid]);
            // echo $businessid , ' \n';
            $query = DB::insert('insert into orders (productid,studentid,businessid,quantity) values(?,?,?,?)',[$productid,$studentid,$businessid,$quantity]);
        }
        $result = DB::delete('delete from cart where studentid = ?',[$studentid]);
        
    }

    function getOrdersforstudent(Request $req){
        $studentid = $req->input('id');
        $result = DB::select('select product.*,orders.quantity,orders.returnbit from product,orders where orders.studentid = ? and orders.productid = product.id', [$studentid]);
        return $result;
    }
    function getOrdersforBo(Request $req){
        $businessid = $req->input('id');
        $result = DB::select('select product.*,orders.quantity from product,orders where orders.businessid = ? and orders.productid = product.id', [$businessid]);
        return $result;
    }
    function orderPlaced(Request $req){
        $id = $req->input('id');
        $result = DB::select('select email from users where id = ?',[$id]); 
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "tls";
        $mail->Mailer = "smtp";
        $mail->IsHTML(true);
        $mail->Username = 'sushrutgamer6@gmail.com';
        $mail->Password = 'uzsdoapyhevqbdbn';
        $mail->SetFrom('sushrutgamer6@gmail.com','MarketPlace');
        $mail->addReplyTo('sushrutgamer6@gmail.com','MarketPlace');
        $mail->addAddress($result[0]->email);
        $mail->Subject = 'Order Successfull';
        $mail->Body = '<p>Hello!</p><p>Your Order Has been Placed Successfully.</p>';
        $mail->send();
    }
    function productReturn(Request $req){
        $productid = $req->input('productid');
        $studentid = $req->input('studentid');
        try{

            $result = DB::update('update orders set returnbit = 1 where productid = ? and studentid = ?',[$productid,$studentid]);
            $boEmail = DB::select('select email from users where id = (select businessowner from product where id = ?)',[$productid]);
            $orderid = DB::select('select id from orders where productid = ? and studentid = ?',[$productid,$studentid]);
            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = 587;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = "tls";
            $mail->Mailer = "smtp";
            $mail->IsHTML(true);
            $mail->Username = 'sushrutgamer6@gmail.com';
            $mail->Password = 'uzsdoapyhevqbdbn';
            $mail->SetFrom('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addReplyTo('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addAddress($boEmail[0]->email);
            $mail->Subject = 'Return Request';

            $mail->Body = '<p>Hello!</p><p>Return Request received for </p> order no '.$orderid[0]->id;
            $mail->send();
            return 0;
        }
        catch(exception){

        }
    }   
    function updateinfo(Request $req){
        $name = $req->input('name');
        $schoolid = $req->input('school_id');
        $email = $req->input('email');
        $userid = $req->input('id');
        $role = $req->input('role');
        try{

            if ($role == 'student'){
                $result = DB::update('update users set name = ? , email = ? where id = ?',[$name,$email,$userid]);
                $result2 = DB::update('update student set school_id = ? where id = ?',[$schoolid,$userid]);
            }
            else if($role == 'superadmin'){
                $result = DB::update('update users set name = ? , email = ? where id = ?',[$name,$email,$userid]);
                $result2 = DB::update('update superadmin set school_id = ? where id = ?',[$schoolid,$userid]);
            }
            else if($role == 'businessowner'){
                $result = DB::update('update users set name = ? , email = ? where id = ?',[$name,$email,$userid]);
                $result2 = DB::update('update businessowner set school_id = ? where id = ?',[$schoolid,$userid]);
            }
            else if($role == 'schooladmin'){
                $result = DB::update('update users set name = ? , email = ? where id = ?',[$name,$email,$userid]);
                $result2 = DB::update('update schooladmin set school_id = ? where id = ?',[$schoolid,$userid]);
            }
            $mail = new PHPMailer();
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->Port = 587;
            $mail->SMTPAuth = true;
            $mail->SMTPSecure = "tls";
            $mail->Mailer = "smtp";
            $mail->IsHTML(true);
            $mail->Username = 'sushrutgamer6@gmail.com';
            $mail->Password = 'uzsdoapyhevqbdbn';
            $mail->SetFrom('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addReplyTo('sushrutgamer6@gmail.com','MarketPlace');
            $mail->addAddress($email);
            $mail->Subject = 'UserData Update';

            $mail->Body = '<p>Hello!</p><p>Information updated Successfully';
            $mail->send();
            return 0 ;
        }catch(e){
            return 1 ;
        }
        return -1;
    }

}
