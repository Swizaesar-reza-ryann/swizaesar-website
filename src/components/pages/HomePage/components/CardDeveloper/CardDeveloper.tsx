import { useScreenSize } from '@/context/ScreenContext';

const CardDeveloper = () => {
  const isMobile = useScreenSize();
  return (
    <div className="card-developer__code" data-mobile={isMobile}>
      <div className="card-developer__code-menu">
        <div className="card-developer__code-menu-item close" />
        <div className="card-developer__code-menu-item minimize" />
        <div className="card-developer__code-menu-item full-screen" />
      </div>

      <div className="card-developer__code-content">
        <div className="card-developer__code-content-variable">
          <code className="const">const</code>
          <div>&nbsp;</div>
          <code className="name">developer</code>
          <div>&nbsp;</div>
          <code className="operator">=</code>
          <div>&nbsp;</div>
          <code className="bracket">{'{'}</code>
        </div>

        <div className="card-developer__code-content-object">
          <div className="card-developer__code-content-object-value">
            <code className="key">name</code>
            <div>&nbsp;</div>
            <code className="operator">:</code>
            <div>&nbsp;</div>
            <code className="value">"Swizaesar Reza Ryann"</code>
            <code className="bracket">,</code>
          </div>

          <div className="card-developer__code-content-object-value">
            <code className="key">nickname</code>
            <div>&nbsp;</div>
            <code className="operator">:</code>
            <div>&nbsp;</div>
            <code className="value">"Ryann"</code>
            <code className="bracket">,</code>
          </div>

          <div className="card-developer__code-content-object-value">
            <code className="key">position</code>
            <div>&nbsp;</div>
            <code className="operator">:</code>
            <div>&nbsp;</div>
            <code className="value">"Front End Developer"</code>
            <code className="bracket">,</code>
          </div>

          <div className="card-developer__code-content-object-value">
            <code className="key">DOB</code>
            <div>&nbsp;</div>
            <code className="operator">:</code>
            <div>&nbsp;</div>
            <code className="value">"24-10-1993"</code>
            <code className="bracket">,</code>
          </div>

          <div className="card-developer__code-content-object-value">
            <code className="key">coffee</code>
            <div>&nbsp;</div>
            <code className="operator">:</code>
            <div>&nbsp;</div>
            <code className="value-boolean">true</code>
            <code className="bracket">,</code>
          </div>
        </div>

        <code className="bracket">{'}'}</code>
      </div>
    </div>
  );
};

export default CardDeveloper;
