import styled from 'styled-components';

export const Container = styled.div`
li{
  margin-left:15px;
  list-style-type: circle;
}
span{
  font-size:14px;
}
p,ul{
  margin:10px 0;
  font-size:14px;
}
h1+p,h1+ul{
    margin:20px 0;
    font-size:14px;
  }
h1{
  margin-bottom:20px;
}
`