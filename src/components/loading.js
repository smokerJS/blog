import React from "react"

const Loading = ({view}) => (
  <section className={`loading-background ${view ? 'view' : ''}`}>
    <div>
      <strong>조금만 기다려 헤헤헤헤헿</strong>
    </div>
  </section>
)

export default Loading
