import React from 'react';
import Product from './Product';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productObjects: [
        {
          id: 1,
          productName: 'Banana',
          quantityInCart: 1,
          price: 40,
          url: 'data:image/jpeg;base64,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',
        },
        {
          id: 2,
          productName: 'Banana',
          quantityInCart: 2,
          price: 40,
          url: 'data:image/jpeg;base64,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',
        },
        {
          id: 3,
          productName: 'Banana',
          quantityInCart: 3,
          price: 40,
          url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhISEhQSEhESERERERISEhERERIRFxMYGBcTGBcaICwjGh0pHhcXJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHRISHTIpIiAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMi8yMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xAA8EAACAQMBBQQIBQMCBwAAAAAAAQIDBBEhBRIxQVFhcYGRBhMiMkJSobEUYsHR8HKS4RUjBzNjgqKy8f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAwEQACAQIDBQYGAwEAAAAAAAAAAQIDEQQhMRITQVGRBSJhgdHwFDJxobHBQlLh8f/aAAwDAQACEQMRAD8A+zAAAAAAAAAFPtz0goWcU6sval7sI6zfbjku1mXpBteNnQlWnFySajGKaWZtPCbfBZXb3HwvbVzOtKrcV5ynWk95YeIxT4QjHpHOEUlKxpThtPM+px/4mWWcSjXh2uEWvpItbP0xtKu64Tk1JZT3Xjt8j4HxXa02+vay0trr1UoVIS1jKL3Xzbeqfm15EOVkWdNZ2P0Hb3Eai3ovK4dGn0aN5xnoztaO/TjnEa8MxXH2tN3PTmvI7MmnPaVzEAAuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYVJqKy+BDaSuwVu36cZ0ZQlGMlJrSSTWjzn+dT4LtCm/wATUhpuqtOCgorO5vtLw0+nI+4391nLfBLQ4C5p0qDq1IQW/UnKcueW3l+GXwPIqY6Maja4qyN4xsjkpWbWFu7qUdUk3iMde3sfmS7KwjOnOolvNNtZTw4pLhjDzxOx2LYwhb05qK35Qy5auWN54WXrgg7W/wBuhVkuLaX900n9GzKWNlLuRLSd9DLYVN050qixFNpx1eXJLKer7z6naXCqQUlz4roz5VNt2sKkeNOUJP8Ap91/dHT+j+19E09HxXIYfGuFTvaP8mexdXO1BHpXCkkyQe3CcZq8WZtWAALEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiVq+uFw5syq1Y0o3kWjFs3ufTVlfeKT1b4ckblXwRLmvoebWxCqRzfkbQptM5nb19u+wuer7jldpVcR14tZfZ2FzteO/Uz+ZLwyVVrYu5uoU+MN7fqdkIvL89F4nkLvzuzRqx1dnQ3aNKD4qnTT791ZKH0qg4W1R8t6H/ALo7P1HNlbtiwjWpVKT034Sjno8aPweH4Fo92akyuy2cz6J141Kc6ctU0011i1hmq237Ss4Tzu50fzR5SX86lNsGpUt6zhNOM4ScJx7U8M+iys6dzCO+uWYzWko9z/QtUilJxJSNljtDGFnPDBd2t/4o5Kts2pQ/PTXu1Fy7JLl38CRa3mNGY08TUpS1sbbpSR29OspcH4czac5bXXB58S0oXnza9p7uH7RjNWnl48DlnQcdCeDCM0+DMz0k01dGAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAI91U3Y6cXov1ZBybLueZ46GmTPn8XW3lZ8lkv39zrpxtH6mFSZWXtbCZMrTKe/noebVqO9jphEpL+phSl018i79DrNRpOs17dZ5z0prSK+78UcxtqeKdTq4tLveh32zqahTpwXCEIRXhFItT0vzE1ZEmo9CBUev8AOBMmQawqzYgjmvSnZKyrqmsSWI1UuceEZ+HDux0Nuw9obqUZaxf0fU6CGJxcJJNNOMk+DTOMr0HbVpU3nd96DfxQfDx5eBSTc4prVExitGd9RlvLimmu9NEC/wBjZ9ulo/k5Pu6dxW7Mv3HCeq+x0VvdKSRaEoVFsy1KyjKDyOeoVpQe7JNSWjT0ZbW92TLq0hVXtLElwmveX7rsKW5s6lJ66w5TXDx6FJQnRzWa96mkZRnloy9pXC6kundvrnvOXp1mSoXTN6OOcNHYznh7nSwuk+On1NiqxfNFBTuzfG4PSp9pytnZnPLD2LxM9KiNbobI3Mup1R7Rjxj0MnRZZggq6fYbFddUbrGUnx+zKbuRKBHVxEyVePX6GixFJ/yXUjZlyNwNXro9fuPXR6/ctvqf9l1RGy+RtBp9fHr9GFXj8y8dBvaf9l1Gy+RuBhGafBp9xmaEAAAAAAA8PTGXB9wBUSlmTfXX6mNRhGFU+QUm1fmeilmRK0invpFvVKe9RyN5m6Oa25LEF/XBP+9H0a0lmK7kfOfSOL9TNrjHEvJo7vY1VTpU5rhKMX9DpT7kX4v9FZInzIdZE5oiV4kVCsSJCeH2Mi+kWznWpb8FmpTzKHWS+KHj90iRJEu1nlYfFfYzpyzsXkuJxWzrlNIvrS6ce4p/SCx/DVvWQX+1Vlr0hU4tdz4+ZutK+UiKsLd5F1mjrba5ytCbGedGcxb1muBbW10n2M0oYlp2kZVKXI2XGyovWm9x/Lxg/Dl4FdWhKHvxcfzLWD8S9hM26SWHhp9TeeGp1M45P3wKRrShk80c3Cobo1idcbGhLWDdOX5dY/2/sV1awrQ+FTj1hx8uP3OWVCtTzt0OiNWnPib43TNkbkq1XSeJJxfRpp+TN8akXwaM1Xki26RZQujdG5KuL7UZKXabxryM3SRafiUPxCKveG8W+IkV3KLT8Uh+KRV7wcx8TIbmJZu6Rg7pFXKoYuqVeJfMncotlc9pthtOUePtLt0+pRfiUiNeX0owm4RUpKLwnJxy8dS9LGSjJKErXKTorijrNnbdt7ipOlSqRlVprM4Z9qKzjPTiWp8t/wCD28pXia9/1c23h5kpTXHi9Gn4n1I+vje2Z5j1AAJIBi+BkBqCkMahsmsNrpoYTR8faytyPRT4kGqisvoltURBuYZTOSWp0I5ratHepVF1hL7Fp6DXW9bqDetNuPhy+mDXcU8plT6N1/UXEqb0jJteK/x9jeLvBris/UWufRUzTWie055Mpk32kY2sytqRMITcXkl1YEWpAw0Zve5IubaFxTlTmsxksPqn1XanhnCzhO1qujU5awlwU4cpL9VyOzt6rg+w92rsynd0916TWsJpe1CX7dVzOqLUlZlM4vwKO2r5RPp1Dl5estanqqy3X8MvgnH5ov8AmC4trpM5KtJxNk7l5QupR7UWNC8T7Cip1CRFinXnDRlZU4yOhhUNimmUFOrKPBkuF+/iWe47aePj/LI5pYdrQsqlCE1iUYyXRpNEKpsWjLhFxf5JNfTgZxvYPng3RrxfCSOjeUamtmZpVIaNorJ7B+SpJf1JS+2DW9i1VwqQffvR/cu1PtR6qnairwuHfDoy6xNVcb+X+FH/AKTX60/7pfse/wCk1+sP7pfsXjqdx46hHweH8epb4qq+C6FMtkVucqa/7pP9DNbGnzqR8It/qWcqyXNGid5BcZLzKPDYaOv3Y39Z6fgh/wCi/wDUf9n+TVPYj5VPOP8AklS2lDr9zU9qw7WZuOE5Lqy6nX9pehW1tk1Y8FGa/K/0eCJGynOW4oNy+VrHn0Rcz2xDo/ocX6QelNSN5Q9XVnb06c6cp8HCrBzTqKS5rdzo/DUthsLRr1VGMnYrOtOMW2sz6L6PbDhaQnjHrKrUqjWMZSworsRdGEZJpNap6p9UZn1kIqKsuB5jbbuwACxAAABU3UcTl3/c1EraENU+v6f/AEio+TxUdivOPj+czupu8UR6iItSJNmjRKJwzWZ0xeRUV6fE5ratBwmqkeOU/FHY1oFTtC234teXeWhLZdy6LLYt8qlOLzy/iLVSOE2PcujUcJaRk9OyXTxOyoVlJZLSWw7cOBEom+aI84EjJhJFJK5VESUTKlVcXleXU2ygaZwCk0WyJF1aUrum4VIqS49JQl8yfJnGbT2TWs25LNSh86XtQX50vvw7jqo5i8p4ZNoXqfszWO3kzohVjLKX+f4UtKOcdDi7LaKeNS3o3KZJ2j6KUqmZ0X6mb19lZpyfbHl4Y8ShuLG5tv8AmU3KC+OnmcMdXzXikUq4VrOJrCrGR0EKiZsjI5232gnzLGld55nFKMlqjSxZ4GCLC5RsjWRW6Fmbsvqz3fl1ZrVVHvrEE0LMz35fM/M8lUl8z8zB1Ea5VC214kWMps1SPJTNTkRZE5iciLKZukaJRLpEM1y1IFP0c/E3VCSWcVIuefd3IyU25LmvZX8Ze2VlKo0kuJ2OzrGNKOFhyfvS69ncev2Vh6squ8WUVx5+C95HFiKiitniTkZHiPT6g84AAAAAAj3cN6L6rVeBVl2youae7Nrk+HceH2tQ+Wqvo/16dDpw8tYmqSNM4m3J5JHiSOuLsRJxI1WlknSiaJRM07M0OZ2ts7OZxWq44+5u2NtF+5P31/5Lr3l5UopoodpbJknv0+K1wuOeqNb5bMtCylc6SnVTRtycrYbTa9mWklxXBPu7S9oXSktGZyvDXqS43JrMJRPIzMsi9ypqcDBxJBi0QDCnUlD3Xjs4olQv/mXiv2IziY4Lwqzhow4RlqiRcbNtq+s6cN5/EluT/uWGQavopDjTqTh2SxOP6P6m9SNka8lwbN/iIP54mexKPyyKqfo/cQ92UJrvlF+WP1NErK5h71Ob7YuM/szoI3010febo7R6x+pR/DS5ryL7dZcEzk5Vpx96M4/1RlH7mSuu06z8fB8U/JGmpTt5+9GD7XFJ+ZR4ei/lmi6xElrA5r8T3HqrFxV2NRl7j3X+V/vkiz2I48JNruRR4WRdYiBC3z1SJS2ek9d76EulbRXwr7nbS7GxEs8kvrf8XMJ42mslcrYU5S4JssbTZDes9F9SfRpk+jA9TD9jUoO9R7X2Xvock8ZJ5RyM7O2jBYisdXzZMijCETaj2IxUVZKyRyNt5s9ABJAAAAAAAIt5Q346cVqiUClSnGpFwloyU7O6KBhMm31vj248PiRByfJYihKjNxl/1c/eh6MJKaujySNUom7JjJHJJF0yPjHcZKKkZNGuUOaJjUtky1rkC+2PCprjEuUo6P8AyVc7KvSentpfFHj4x/Y6aFZrjqb47suhtHZeSfkxtSRzNttZZ3Z+zJddCzp3SfMnXGzqdRYlGMu9J4K+WwlHWnKUOzO9HyZnKg1oXVSL1JMahmporpWlWHDdn5xflwNbu3D34Tj24yvNGTTRNk9C2PGivpX8ZcJLzJEa6fMbQsza0YNHqqDeDZGh4eZMsmLKE3PJM0ykbWR5Iq0SjH1rXBmSvZrmzRM1MhKwfiWENov4llEq3vKcmouUYylpFSaTk+izzKFs5r0lqPep6SaUt5tRTWODXiso9bsqvWjXUFLJ6o5MRGLi21ofWacCZTiVfo7Zuja0KbnKo4U45nJ7zedcZ6LOF2JFzFH1p5xlFGZ4j0AAAAAAAAAAAAAwkipvLbd9qPu818v+C4ZrnE5sThYYiGzLXg+RenUcHdFBvHu8SbyxazKn4x/b9ivU/PmmfK4nD1MPLZmvo+DPRhKM1dG9mJhvHu8crNLDdPN093jzJUk9U2uDPfxTXFZMGzVNkb2UdGRsp6kh3UXx0MG4S+KPiQ5mmRO/k9bE7CJVW0py4qGeumfMrbu33MuFTdxycsx+puyRL6GYvuIVS7zIzXErtn+kSm3GWjTw8PQvKV4pI4XZOzpzq1YZUJRSnqm95OTWcrh/k6CjZVqfJSXY/wB8Hq1uzZS71FNp+/qZxxEdJPM6BVj31hUQqVF70H9/sbVcPmmjglhq0dYvozbbi9GiydQ1ymQvxK/mDx111XmjPdS5Fro31JGps1Trx6rzEG5cE34M2p4StP5YN+RSVSC1aNjRLstjxqSU6izFfA9VNZ4NdNDG1tZN5aL+1otHudn9kulJVKrzWi9X+ll4nDWxCktmJYUCXE0UYEmKPcOQ9PQAAAAAAAAAAAAAAYtGQANTRDurKM9eEvm5+PUsMGEolKlONSOzNXTJjJxd0c1cUZ0/eWY/NxXj0NKqHRVoFPdWS1aWH5fQ8PEdivWjLyfr69Ttp4z+66EXfPHM0VKc48sryZodw1xjLyz9jyKmBxVPWD8s/wAXOqNanLRk3fMZSITvY93flGqe0I9TmdOpo4voWy5k2cjRJkSV/F8Ne7LMJV5y92D7+BenhK1R2jF9CJTitWS3NLiaZ1HPSCz2munY1JvM2+4uLWxxjQ9nC9iO6lWfkvX06nJUxSWUCPY2Cgnhe1LDlLGr6LuRYRtewmULbBMhSPoYQjCKjFZI4m23dlUrJdD17OT5FwqR6qZYgo3suD5LyPFseHyryL5UzJUibsFHDZMflRJp7PiuRbxpGSgQCDC0S5EmFHBvUDLABjGJmMHoAAAAAAAAAAAAAAAAAAAPGgADCUSPOlkAAjztkyPKyXQAA1y2dHojB7Nj0QAB4tnR6IzjYLoj0AGyFmkb4W6QABIhTNigAAZboUQADJRMlEAA9we4AAPQAAAAAAAAAAAAAAf/2Q==',
        },
      ],
    };
  }

  onIncrement(id) {
    const { productObjects } = this.state;
    const newState = {
      ...this.state,
      productObjects: productObjects.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, quantityInCart: eachProduct.quantityInCart + 1 };
        }
        return { ...eachProduct };
      }),
    };
    this.setState(newState);
  }

  onDecrement(id) {
    const { productObjects } = this.state;
    const newState = {
      ...this.state,
      productObjects: productObjects.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, quantityInCart: eachProduct.quantityInCart - 1 };
        }
        return { ...eachProduct };
      }),
    };
    this.setState(newState);
  }

  render() {
    const { productObjects } = this.state; // destructuring
    const allProducts = productObjects.map((eachProduct) => (
      <Product
        key={eachProduct.id}
        product={eachProduct}
        onIncrement={() => this.onIncrement(eachProduct.id)}
        onDecrement={() => this.onDecrement(eachProduct.id)}
      />
    ));
    return (
      <div className="products">
        {allProducts}
      </div>

    );
  }
}

export default Home;
