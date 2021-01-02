import React from 'react';
import axios from 'axios';
import './App.css';

const categoryList = ['전체', '정치', '경제', '연예', '스포츠', '사회', '생활/문화', '세계', 'IT/과학', '기타' ];

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        dataList: [],
        isEmpty: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
      await axios
      .get('http://localhost:4000')
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        console.log('! componentDidMount: ', data[0].category);
        this.setState({dataList: data});
      });
    }

    handleClick = (e) => {
      console.log(e);
      const updateRender = async () => {
        await axios
        .get('http://localhost:4000')
        .then(res => {
          return res.data.data;
        })
        .then(data => {

          const sameCategory = data.filter(item => {
            return e === item.category;
          })

          if(!sameCategory) {
            alert('카테고리에 뉴스가 없습니다.');
          }

          if(e === '전체') {
            this.componentDidMount();
          }

          this.setState({ dataList: sameCategory });

        });
      }

      updateRender();
    }
    
    render() {
      return (
        <div>
          {/* {console.log('categoryList@@@@@@@@', categoryList)} */}
          <div className="category-area">
            {categoryList.map(item => {
            return <div className="category" onClick={() => this.handleClick(item)}>{item}</div>
            })}
          </div>

          <div>
            총 {this.state.dataList.length}개가 검색되었습니다.
          </div>
  
          {this.state.dataList.map(item => {
            return (
              <div key={item.id} className="data">
                <h2>title</h2>
                <div>{item.title}</div>
                <h2>description</h2>
                <div>{item.text}</div>
                <h2>category</h2>
                <div>{item.category}</div>
              </div>
            )
          })
          }
        </div>
      );
    }
    
}

export default App;
