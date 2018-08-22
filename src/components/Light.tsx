import * as React from 'react'

interface Props {
  on?: boolean,
  onPress?: () => void,
}

export default class Light extends React.Component<Props> {

  onPress = () => {
    const { onPress } = this.props
    onPress && onPress()
  }

  render () {
    const onClass = (this.props.on) ? 'on' : 'off'
    return (
      <button
        className={`light ${onClass}`}
        onClick={this.onPress}
      />
    )
  }

}
