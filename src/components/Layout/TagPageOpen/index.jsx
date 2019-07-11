import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Dropdown, Button, Menu } from 'antd'
import Tag from './Tag'
import './index.less'


const mapStateToProps = (state) => ({
  get tagPage () {
    return state.breadcrumb.tagPage
  }
})

const mapDispatchToProps = (dispatch) => ({

})

@connect(mapStateToProps, mapDispatchToProps)
class TagPageOpen extends PureComponent {
  // 当前tag
  _currentTag = null
  constructor () {
    super()
    this.state = {
      // 滚动区域left
      scrollBodyLeft: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.tagPage)
  }

  // 标签移动
  moveToTag (tag, tagViewWidth) {
    const { scrollBodyLeft } = this.state

    if (tag.offsetLeft < -scrollBodyLeft) {
      // 标签在可视区域左侧
      
      this.setState({
        scrollBodyLeft: -tag.offsetLeft + 10
      })
    } else if (tag.offsetLeft + 10 > -scrollBodyLeft && tag.offsetLeft + tag.offsetWidth < -scrollBodyLeft + tagViewWidth - 100) {
      // 标签在可视区域
      this.setState({
        scrollBodyLeft: Math.min(0, tagViewWidth - 100 - tag.offsetWidth - tag.offsetLeft - 20)
      })
    } else {
      // 标签在可视区域右侧
      this.setState({
        scrollBodyLeft: -(tag.offsetLeft - (tagViewWidth - 100 - tag.offsetWidth) + 20)
      })
    }
  }

  render() {
    const tags = this.props.tagPage.map((item) => {
      return (
        <Tag
          onRef={(tag) => {
            this._currentTag = tag
          }}
          color={item.color}
          closable={item.flag}
          key={item.path}>
          {item.title}
        </Tag>
      )
    })

    const menus = (
      <Menu>
        <Menu.Item>
          关闭所有
        </Menu.Item>
        <Menu.Item>
          关闭其他
        </Menu.Item>
      </Menu>
    )

    return (
      <div className="TagPageOpen">
        <Row>
          <Col span={22}>
            <div className="TagPageOpen__scroll-view">
              <div className="TagPageOpen__scroll-body" style={{left: `${this.state.scrollBodyLeft}px`}}>
                {tags}
              </div>
            </div>
          </Col>
          <Col span={2} className="TagPageOpen__col-2">
          <Dropdown overlay={menus} placement="bottomCenter">
            <Button type="primary" size="small">标签选项</Button>
          </Dropdown>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TagPageOpen