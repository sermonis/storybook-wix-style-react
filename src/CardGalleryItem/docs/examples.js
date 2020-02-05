export const iconButton = `
<CardGalleryItem
title="Card title"
subtitle="Card subtitle"
settingsMenu={<PopoverMenu
  triggerElement={({ toggle, close }) => (
    <IconButton
      onClick={e => { e.stopPropagation(); toggle()}}
      onMouseLeave={close}
      skin="light"
      size="small"
      priority="secondary"
    >
      <Icons.More />
    </IconButton>
  )}
>
  <PopoverMenu.MenuItem text="Edit" prefixIcon={<Icons.Edit />} />
  <PopoverMenu.MenuItem text="Email" prefixIcon={<Icons.Email />} />
  <PopoverMenu.MenuItem text="Delete" skin="destructive" prefixIcon={<Icons.Delete />} />
</PopoverMenu>}
primaryActionProps={{label: 'Button', onClick:() => console.log('hello') }}
secondaryActionProps={{label: 'Text link', onClick:() => console.log('hello')}}
backgroundImageUrl="example.jpg"
/>
`;

export const badge = `
<CardGalleryItem
  title="Card title"
  badge={
    <Badge size="medium" skin="standard" type="solid" uppercase>
      sale
    </Badge>
  }
  subtitle={'Card subtitle'}
  primaryActionProps={{
    label: 'Button',
    onClick: () => {
      alert('Primary action clicked');
    },
  }}
  secondaryActionProps={{
    label: 'Text link',
    onClick: () => {
      alert('Secondary action clicked');
    },
  }}
  backgroundImageUrl="example.jpg"
/>
`;

export const backgroundImageNode = `
<CardGalleryItem
  title="Card title"
  subtitle={'Card subtitle'}
  primaryActionProps={{
    label: 'Button',
    onClick: () => {
      alert('Primary action clicked');
    },
  }}
  secondaryActionProps={{
    label: 'Text link',
    onClick: () => {
      alert('Secondary action clicked');
    },
  }}
  backgroundImageNode={
    <div
      style={{
        backgroundColor: '#4EB7F5',
        color: 'white',
        height: '100%',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          paddingTop: '200px',
          paddingLeft: '230px',
          transform: 'rotate(15deg)',
        }}
      >
        My Component!
      </div>
    </div>
  }
/>
`;

export const disabledPrimaryAction = `
<CardGalleryItem
title="Card title"
subtitle="Card subtitle"
primaryActionProps={{label: 'Button', onClick:() => console.log('hello'), disabled: true, disabledMessage: 'Message Example' }}
secondaryActionProps={{label: 'Text link', onClick:() => console.log('hello')}}
backgroundImageUrl="example.jpg"
/>
`;
