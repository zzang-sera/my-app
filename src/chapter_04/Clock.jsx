function Clock(props) {
    return(
    <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시간: 
            
            {new Date().toLocaleTimeString(
                //JS의 Date 객체에서 날짜를 사용자 지정 형식으로 변환하는 메소드드
                'ko-KR', { //한국 기준 날짜 표시
                    weekday: 'long', //요일
                    year: 'numeric', //년
                    month: 'long', //월
                    day: 'numeric' //일
                    })}</h2>
        </div>
    );
}

export default Clock;