import axios from 'axios';

const host = 'http://localhost:4000';

const acceptGoOutUrl = '/out/go/accept'; // 외출 승인
const acceptSleepOutUrl = '/out/sleep/accept'; // 외박 승인

const unAcceptGoOutUrl = '/out/go/list/unaccept'; // 승인되지 않은 외출 신청 조회
const unAcceptSleepOutUrl = '/out/sleep/list/unaccept'; // 승인되지 않은 외박 신청 조회

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0ZWFjaGVyMUBkZ3N3LmhzLmtyIiwiY2xhc3NJZHgiOm51bGwsImF1dGgiOjAsImlhdCI6MTUyNTc1MDI3NCwiZXhwIjoxNTI2MzU1MDc0LCJpc3MiOiJqZWZmY2hvaS5jb20iLCJzdWIiOiJ0b2tlbiJ9.CO4-qcL2CSzpwBhoGnvXFPvCJZBQBse9z_ZImAFOm2Y';


const GetGoOutData = async () => { // 외출 데이터를 가지고 온다.
    const data = await axios.get(host + unAcceptGoOutUrl, {headers: {'x-access-token': `${token}`}});
    const goOutRequestUsers = data.data.data.unaccept_users;

    return goOutRequestUsers;
}

const GetSleepOutData = async () => { // 외박 신청 데이터를 가지고 온다.
    const data = await axios.get(host + unAcceptSleepOutUrl, {headers: {'x-access-token': `${token}`}});
    const sleepOutRequestUsers = data.data.data.unaccept_users;

    return sleepOutRequestUsers;
}

const AcceptGoOut = (go_out_idx, class_idx) => { // 외출 승인
    console.log(go_out_idx);
    console.log(class_idx);

    axios.post(host + acceptGoOutUrl, {
        go_out_idx,
        class_idx,
    }, {headers: {'x-access-token': `${token}`}});
}

const AcceptSleepOut = (sleep_out_idx, class_idx) => { // 외박 승인
    console.log(sleep_out_idx);
    console.log(class_idx);

    axios.post(host + acceptSleepOutUrl, {
        sleep_out_idx,
        class_idx,
    }, {headers: {'x-access-token': `${token}`}});
}

export { GetGoOutData, GetSleepOutData, AcceptGoOut, AcceptSleepOut };