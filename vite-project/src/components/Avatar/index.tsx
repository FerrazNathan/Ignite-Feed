import React from 'react'
import { AvatarProps } from './types'

import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <div>
      <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          {...props}
        />
    </div>
  )
}
