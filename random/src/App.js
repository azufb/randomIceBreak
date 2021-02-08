import React from 'react';
import './App.css';
import vase from './../src/vase.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      listsArray: [],
      topic: 'シャッフルします！'
    };
  }

  // 乱数(ある範囲の数値から任意に取り出した数値)を生成する、Math.randomを利用。
  // Math.floor()で整数にする。
  // 整数にすることで、インデックス番号を取得。

  onChange(e) {
    this.setState({question: e.target.value});
  }

  handleAdd() {
    this.setState({
      listsArray: this.state.listsArray.concat(this.state.question),
      question: '' // 追加と同時に空欄に戻すため、stateもnullに。
    });
  }

  handleClick() {
    /* 
      ランダムなインデックス番号の取得方法は、0〜配列(topicsList)のインデックス番号のうち最大の中で、任意の数字を取り出してくる。
      その取り出した数値がインデックス番号となり、そのインデックス番号で格納されている要素が取得できる。
    */
    let todaysQ = this.state.listsArray[Math.floor(Math.random() * this.state.listsArray.length)];
    /*
      Math.random関数は、引数を取らない。
    */
    this.setState({
      topic: `今日のアイスブレイクのネタは...「${todaysQ}」です！`
    });
  }

  render() {
    let lists = this.state.listsArray.map((list, id) => {
      return <li key={id}>{list}</li>
    });

    if (this.state.topic !== 'シャッフルします！') {
      lists = '';
    }

    return (
      <div>
        <h1>アイスブレイクシャッフル！</h1>
        <div className="formArea">
          <input type='text' value={ this.state.question} onChange={e => this.onChange(e)} 
          placeholder="ネタはここに入力！" />
          <button onClick={() => this.handleAdd()}>ADD</button>
        </div>

        <div className="listArea">
          <ul>
            {lists}
          </ul>
        </div>

        <div className="vasePic">
          <img src={vase}/>
        </div>

        <div className="shuffleArea">
          <div className="shuffleBtn">
            <button onClick={() => this.handleClick()}>Shuffle</button>
          </div>

          <div className="box">
            <p>{this.state.topic}</p>
          </div>
        </div>
      </div>
    )
  }


}

export default App;
