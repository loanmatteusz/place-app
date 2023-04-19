import { CardActions, Collapse, IconButton, Theme, Typography, createStyles, makeStyles } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons';
import { City, CollapseBar, CollapseListContent, Content, Label } from "./styles";
import { CollapseListProps } from "./types";
import { useState } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

export const CollapseList = ({ letter, cities }: CollapseListProps) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CollapseListContent key={letter}>
            <CollapseBar>
                <CardActions disableSpacing>
                    <Label>{letter}</Label>
                    <IconButton
                        style={{
                            // width: '100%',
                            color: 'cyan',
                        }}
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </CollapseBar>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Content>
                    {
                        cities?.map(city => <City key={city}>{city}</City>)
                    }
                </Content>
            </Collapse>
        </CollapseListContent>
    );
}
