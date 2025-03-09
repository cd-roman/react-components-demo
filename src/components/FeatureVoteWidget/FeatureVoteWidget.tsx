import { useState } from "react";
import "./FeatureVoteWidget.scss";

interface Feature {
  id: string;
  name: string;
}

interface VoteCount {
  upvotes: number;
  downvotes: number;
}

interface FeatureVoteWidgetProps {
  title?: string;
  features?: Feature[];
}

export const FeatureVoteWidget: React.FC<FeatureVoteWidgetProps> = ({
  title = "Feature vote widget",
  features = [
    { id: "feat1", name: "Feature #1" },
    { id: "feat2", name: "Feature #2" },
    { id: "feat3", name: "Feature #3" },
    { id: "feat4", name: "Feature #4" },
    { id: "feat5", name: "Feature #5" },
    { id: "feat6", name: "Feature #6" },
  ],
}) => {
  const [votes, setVotes] = useState<Record<string, VoteCount>>(() => {
    const initialVotes: Record<string, VoteCount> = {};
    features.forEach(feature => {
      initialVotes[feature.id] = { upvotes: 0, downvotes: 0 };
    });
    return initialVotes;
  });

  const handleVote = (id: string, type: 'upvotes' | 'downvotes') => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [id]: {
        ...prevVotes[id],
        [type]: (prevVotes[id]?.[type] || 0) + 1
      }
    }));
  };

  return (
    <section className="feature-vote-widget">
      <h1 className="feature-vote-widget__title">{title}</h1>
      <div className="feature-vote-widget__container">
        {features.map((feature) => (
          <article 
            key={feature.id} 
            className="feature-vote-widget__card"
            data-testid={`aspect-${feature.id}`}
          >
            <h2>{feature.name}</h2>
            <div className="feature-vote-widget__actions">
              <button 
                className="feature-vote-widget__button feature-vote-widget__button--upvote"
                onClick={() => handleVote(feature.id, 'upvotes')} 
                data-testid={`upvote-btn-${feature.id}`}
                aria-label={`Upvote ${feature.name}`}
              >
                👍 Upvote
              </button>
              <button 
                className="feature-vote-widget__button feature-vote-widget__button--downvote"
                onClick={() => handleVote(feature.id, 'downvotes')} 
                data-testid={`downvote-btn-${feature.id}`}
                aria-label={`Downvote ${feature.name}`}
              >
                👎 Downvote
              </button>
            </div>
            <p 
              className="feature-vote-widget__count" 
              data-testid={`upvote-count-${feature.id}`}
            >
              Upvotes: <strong>{votes[feature.id]?.upvotes || 0}</strong>
            </p>
            <p 
              className="feature-vote-widget__count" 
              data-testid={`downvote-count-${feature.id}`}
            >
              Downvotes: <strong>{votes[feature.id]?.downvotes || 0}</strong>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
