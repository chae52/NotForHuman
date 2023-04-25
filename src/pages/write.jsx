import Header from '../components/Header'
import '../pages/write.css'
const submit = (e) => {
  e.preventDefault()
  const name = document.querySelector('.namebox').value
  const password = document.querySelector('.namebox').value
  const title = document.querySelector('.title').value
  const image = document.querySelector('.image').value
  const category = document.querySelector('.category').value
  const text = document.querySelector('.textbox').value
  const data = {
    name,
    password,
    title,
    image,
    category,
    text,
  }
  console.log(data)
}
const Write = () => {
  return (
    <div>
      <Header />
      <form className="writepage" onSubmit={submit}>
        <div className="writebox">
          <input className="namebox" placeholder="이름을 입력하세요" />
          <input className="namebox" placeholder="비밀번호를 입력하세요" />
        </div>
        <div className="titlebox">
          <b>제목</b>
          <input className="title" />
        </div>
        <div>
          <b>이미지</b>
          <input type="file" accept="image/*" className="image" />
          <b>카테고리</b>
          <select className="category">
            <option value="1">식물</option>
            <option value="2">동물</option>
          </select>
        </div>
        <div>
          <b>내용</b>
          <textarea className="textbox" />
        </div>
        <div>
          <div />
          <button type="submit" className="submit">
            작성하기
          </button>
        </div>
      </form>
    </div>
  )
}

export default Write
