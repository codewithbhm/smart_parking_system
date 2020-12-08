import styled from 'styled-components/native'

export const Container = styled.View`
  background: #FFF
  height: 300px
  width: 100%
  position: absolute
  bottom:0
  shadow-color: #000
  shadow-offset: 0 0
  shadow-opacity: 0.2
  elevation: 3
  border: 1px solid #DDD
  align-items: center
  padding: 20px;
`

export const TypeDescription = styled.Text`
color: #222
font-size: 14px
`
export const DateTimeSelectText = styled.Text`
color: #292929
font-size: 20px
margin-top:5px
margin-bottom:8px
`

export const RequestButton = styled.TouchableOpacity`
background: #FBBC04
justify-content: center
align-items: center
height: 44px
align-self: stretch
border-radius: 10px
margin-top: 10px
`

export const RequestButtonText = styled.Text`
font-size: 20px
text-align: center
margin: auto
`

export const CheckContainer = styled.View`
width: 90%
`

export const CheckView = styled.View`
margin-top: 10px
display: flex
flex-direction: row
align-items: center
justify-content: space-between
`