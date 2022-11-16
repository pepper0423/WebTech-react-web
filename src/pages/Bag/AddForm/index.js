import Form from 'react-bootstrap/Form';
import AppleButton from '../../../components/AppleButton';



const AddForm = () => {
    return (

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="ชื่อ" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="นามสกุล" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="หมายเลขหรือชื่ออาคาร, ชื่อถนน" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="ชื่อถนน, ซอย, หมู่" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="ข้อมูลที่อยู่เพิ่มเติม (ไม่บังคับ)" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select disabled>
                    <option>กรุงเทพมหานคร</option>
                    <option>จันทบุรี</option>
                    <option>ฉะเชิงเทรา</option>
                    <option>ชลบุรี</option>
                    <option>อยุธยา</option>
                    <option>อุทัยธานี</option>
                    <option>อุบลราชธานี</option>
                </Form.Select>
            </Form.Group>
            <AppleButton className="px-28 text-xl block mx-auto mt-8">
                ดำเนินการต่อที่การชำระเงิน
            </AppleButton>


        </Form>
    );
}

export default AddForm;
