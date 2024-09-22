    <?php
    $name= $_POST['name'];
    $email= $_POST['email'];
    $Phone= $_POST['Phone'];
    $dob= $_POST['dob'];
    $scholarshipType= $_POST['scholarshipType'];
    $Gender= $_POST['Gender'];
    $address= $_POST['address'];
    $Password= $_POST['Password'];
    if ($_SERVER['request_method']=='post'){
        $name= $_POST['name'];
        $email= $_POST['email'];
        $Phone= $_POST['Phone'];
        $dob= $_POST['dob'];
        $scholarshipType= $_POST['scholarshipType'];
        $Gender= $_POST['Gender'];
        $address= $_POST['address'];
        $Password= $_POST['Password'];
        echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>';
    }

    // submit data base
    ?>