import React from 'react';
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui-icons/LightbulbOutline';
import HomeIcon from 'material-ui-icons/Home';
import CodeIcon from 'material-ui-icons/Code';
import Button from 'material-ui/Button';
import { translate } from 'react-admin';

export default translate(({ style, translate }) => (
    <Card style={style}>
        <CardHeader
            title={translate('pos.dashboard.welcome.title')}
            subtitle={translate('pos.dashboard.welcome.subtitle')}
            avatar={<Avatar icon={<LightBulbIcon />} />}
        />
        <CardActions style={{ textAlign: 'right' }}>
            <Button href="https://marmelab.com/react-admin">
                <HomeIcon />
                {translate('pos.dashboard.welcome.aor_button')}
            </Button>
            <Button href="https://github.com/marmelab/react-admin">
                <CodeIcon />
                {translate('pos.dashboard.welcome.demo_button')}
            </Button>
        </CardActions>
    </Card>
));
