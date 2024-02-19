/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [maMonHoc, setMaMonHoc] = useState('')
  const [maSinhVien, setMaSinhVien] = useState('')
  const [result, setResult] = useState(null)

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/scores/specific/${maMonHoc}/${maSinhVien}`)
      setResult(response.data.score)
    } catch (error) {
      console.error('Error fetching data: ', error)
      setResult({ error: error.response.data.message })
    }
  }

  return (
    <div className="App">
      <h1>Tra cứu Điểm Sinh Viên</h1>
      <div>
        <label>Mã Môn Học:</label>
        <input type="text" value={maMonHoc} onChange={(e) => setMaMonHoc(e.target.value)} />
      </div>
      <div>
        <label>Mã Sinh Viên:</label>
        <input type="text" value={maSinhVien} onChange={(e) => setMaSinhVien(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSearch}>Tra cứu</button>
      </div>
      {result && (
        <div>
          {result.error ? (
            <p style={{ color: 'red' }}>{result.error}</p>
          ) : (
            <p>
              Điểm của Sinh Viên {result.maSinhVien} môn {result.maMonHoc} là: {result.diem}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default App