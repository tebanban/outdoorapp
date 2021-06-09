import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={'/images/avatar/avatar3.jpg'} />
      <Avatar alt="Travis Howard" src={'/images/avatar/avatar4.jpg'} />
      <Avatar alt="Cindy Baker" src={'/images/avatar/avatar5.jpg'} />
      <Avatar alt="Agnes Walker" src={'/images/avatar/avatar6.jpg'} />
      <Avatar alt="Trevor Henderson" src={'/images/avatar/avatar7.jpg'} />
    </AvatarGroup>
  );
}
